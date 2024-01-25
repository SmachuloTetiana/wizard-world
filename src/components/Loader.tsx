export default function Loader() {
  return (
    <div className="loader w-full">
      <svg
        aria-hidden="true"
        className="loader animate-spin"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        enableBackground="new 0 0 128 128"
      >
        <path
          fill="currentColor"
          d="M64,0C28.7,0,0,28.7,0,64c0,35.3,28.7,64,64,64s64-28.7,64-64C128,28.7,99.3,0,64,0z M64,112c-26.5,0-48-21.5-48-48c0-26.5,21.5-48,48-48s48,21.5,48,48C112,90.5,90.5,112,64,112z"
        />
        <path
          fill="currentFill"
          d="M64,0c-0.2,0-0.4,0-0.7,0c-0.1,0-0.2,0-0.3,0c-4.4,0-8,3.6-8,8s3.6,8,8,8v0c0.3,0,0.7,0,1,0c26.5,0,48,21.5,48,48c0,4.4,3.6,8,8,8s8-3.6,8-8C128,28.7,99.3,0,64,0z"
        />
      </svg>
    </div>
  );
}
