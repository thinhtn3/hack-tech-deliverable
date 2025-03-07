export default function Quotes({ name, message, time }) {
  return (
    <div>
      <p>{name}</p>
      <p>{message}</p>
      <p>{time}</p>
    </div>
  );
}
