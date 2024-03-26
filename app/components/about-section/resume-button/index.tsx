import { RESUME_PATH } from "@/app/constants/path";

const ResumeDownload = () => {
    return (
        <>
            <a
                href={RESUME_PATH}
                download="Rui_Tang_Resume"
                id="resume-download-button"
                className="inline-block text-white bg-highlight hover:border-highlight focus:border-highlight hover:text-white-30 hover:bg-black px-7 py-0.5 text-sm sm:text-base uppercase tracking-widest transition-colors duration-300 ease-in-out"
            >
                Download
            </a>
        </>
    );
};

export default ResumeDownload;