import "../../public/my-CV.pdf";
const CVDownloadButton = () => {
  return (
    <div>
      <a
        className="btn rounded-full bg-[#03ebff] hover:bg-[#03ebff] text-[#09465c] hover:text-[#09465c] custom-Shadow border-none mt-4"
        href="https://drive.google.com/uc?export=download&id=1-jZlv_u2SefzcXcd7CvwUL2rMt_EwNtc"
        download>
        Download CV
      </a>
    </div>
  );
};

export default CVDownloadButton;
