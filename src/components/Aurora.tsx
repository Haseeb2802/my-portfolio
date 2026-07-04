/** Fixed full-page animated aurora background — huge blurred color
 *  blobs drifting slowly behind all content, plus a film-grain layer. */
export default function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora__blob aurora__blob--1" />
      <div className="aurora__blob aurora__blob--2" />
      <div className="aurora__blob aurora__blob--3" />
      <div className="aurora__blob aurora__blob--4" />
      <div className="aurora__noise" />
    </div>
  );
}
