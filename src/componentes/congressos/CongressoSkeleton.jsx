export default function CongressoSkeleton() {
  return (
    <div className="card card--skeleton" aria-hidden="true">
      <div className="card__image skeleton-box" />
      <div className="card__body">
        <div className="skeleton-line skeleton-line--short" />
        <div className="skeleton-line" />
        <div className="skeleton-line skeleton-line--medium" />
      </div>
    </div>
  )
}