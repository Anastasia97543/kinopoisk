import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router";
import { requests } from "@/shared/api";
import { getTmdbImage, moviePath } from "@/shared/lib";
import styles from "./MovieSearch.module.css";

const MIN_QUERY_LENGTH = 3;
const DEBOUNCE_MS = 400;

type SearchHit = {
  id: number;
  title: string;
  year: string;
  poster: string;
};

type MovieSearchProps = {
  onClose?: () => void;
};

export function MovieSearch({ onClose }: MovieSearchProps) {
  const listId = useId();
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [ready, setReady] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const trimmed = query.trim();

    if (trimmed.length < MIN_QUERY_LENGTH) {
      setHits([]);
      setReady(false);
      return;
    }

    const controller = new AbortController();
    setReady(false);
    const timer = window.setTimeout(() => {
      requests
        .searchMovie({ query: trimmed }, { signal: controller.signal })
        .then(({ data }) => {
          setReady(true);
          setHits(
            (data.results ?? [])
              .filter((movie) => movie.id && movie.title)
              .slice(0, 6)
              .map((movie) => ({
                id: movie.id as number,
                title: movie.title ?? "",
                year: movie.release_date?.slice(0, 4) ?? "",
                poster: getTmdbImage(movie.poster_path, "w92"),
              })),
          );
        })
        .catch(() => {
          if (controller.signal.aborted) return;
          setReady(true);
          setHits([]);
        });
    }, DEBOUNCE_MS);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  const showList = ready && query.trim().length >= MIN_QUERY_LENGTH;

  return (
    <div className={styles.search}>
      <label className={styles.field}>
        <span className={styles.icon} aria-hidden="true" />
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          value={query}
          placeholder="Поиск"
          autoComplete="off"
          aria-label="Поиск фильма"
          aria-controls={listId}
          aria-expanded={showList}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>

      {showList ? (
        <ul id={listId} className={styles.list} role="listbox">
          {hits.length === 0 ? (
            <li className={styles.empty}>Ничего не найдено</li>
          ) : (
            hits.map((hit) => (
              <li key={hit.id} role="option">
                <Link
                  to={moviePath(hit.id)}
                  className={styles.hit}
                  onClick={() => {
                    setQuery("");
                    onClose?.();
                  }}
                >
                  {hit.poster ? (
                    <img src={hit.poster} alt="" className={styles.poster} />
                  ) : (
                    <span className={styles.placeholder} />
                  )}
                  <span className={styles.meta}>
                    <span className={styles.title}>{hit.title}</span>
                    {hit.year ? <span className={styles.year}>{hit.year}</span> : null}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
