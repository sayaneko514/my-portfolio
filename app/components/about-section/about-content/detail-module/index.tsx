interface DetailPropsBase {
    title: string;
    hasTextContent: boolean;
}

interface DetailPropsWithText extends DetailPropsBase {
    hasTextContent: true;
    textContent: string;
}

interface DetailPropsWithoutText extends DetailPropsBase {
    hasTextContent: false;
    textContent?: never;
}

type DetailProps = DetailPropsWithText | DetailPropsWithoutText;

const DetailContent: React.FC<DetailProps> = ({
    title,
    hasTextContent,
    textContent
}) => {

    const titleId = `about-${title.replace(/[\s/]+/g, '-')}`;
    const contentId = titleId + "-content"

    return (
        <>
            <p className="text-xs md:text-sm uppercase font-bold tracking-widest mt-5 text-center"
                id={titleId}
                style={{
                    fontFamily: '"Poppins", sans-serif',
                    lineHeight: '2.6rem',
                    letterSpacing: '.2rem'
                }}>{title}:
            </p>
            {hasTextContent && (
                <p className="text-xs md:text-sm text-slate-500 text-center"
                    id={contentId}
                    style={{
                        fontFamily: '"Poppins", sans-serif',
                        lineHeight: 2,
                        letterSpacing: '.2rem'
                    }}>{textContent}
                </p>
            )}
        </>
    );
};

export default DetailContent;