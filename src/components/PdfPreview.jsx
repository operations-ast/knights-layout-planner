import { useEffect, useMemo, useRef } from 'react';

const DownloadIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v9m0 0-3.5-3.5M10 12l3.5-3.5M4 14v2.5h12V14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/**
 * Full-screen preview of the client PDF before it is saved.
 * doc: { blob, filename } from makeClientPdf. Nothing is downloaded until "Download" is clicked.
 */
export default function PdfPreview({ doc, onClose }) {
  const url = useMemo(() => URL.createObjectURL(doc.blob), [doc]);
  const closeRef = useRef(null);
  // browsers without a built-in PDF viewer (most phones) get a plain message instead of a blank frame
  const canShow = navigator.pdfViewerEnabled !== false;

  useEffect(() => () => URL.revokeObjectURL(url), [url]);
  useEffect(() => {
    const prev = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = overflow; prev?.focus?.(); };
  }, [onClose]);

  const download = () => {
    // a separate link from the one the preview frame has open; Chrome cancels a download of that one
    const dl = URL.createObjectURL(doc.blob);
    const a = document.createElement('a'); a.href = dl; a.download = doc.filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(dl), 60000);
  };
  const sizeKb = Math.max(1, Math.round(doc.blob.size / 1024));

  return (
    <div className="pdfmodal" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="pdfbox" role="dialog" aria-modal="true" aria-labelledby="pdfprev-title">
        <div className="pdfhead">
          <h2 id="pdfprev-title">PDF preview</h2>
          <span className="fname" title={doc.filename}>{doc.filename} · {sizeKb.toLocaleString()} KB</span>
          <button className="btn primary" onClick={download}><DownloadIcon />Download</button>
          <button className="btn" ref={closeRef} onClick={onClose}>Close</button>
        </div>
        {canShow ? (
          <iframe className="pdfframe" title="PDF preview" src={`${url}#view=FitH`} />
        ) : (
          <div className="pdffall">
            <p>This browser can't show the PDF here.</p>
            <p><a className="btn" href={url} target="_blank" rel="noopener">Open in a new tab</a></p>
          </div>
        )}
      </div>
    </div>
  );
}
