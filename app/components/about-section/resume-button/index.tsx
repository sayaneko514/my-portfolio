import { RESUME_PATH } from "@/app/constants/path";

const ResumeDownload = () => {
    return (
        <>
            <a
                href={RESUME_PATH}
                download="Rui_Tang_Resume"
                id="resume-download-button"
                className="inline-block text-white bg-gray-700 hover:bg-black px-7 py-0.5 text-base uppercase tracking-widest transition-colors duration-300 ease-in-out"
            >
                Download
            </a>
        </>
    );
};

export default ResumeDownload;