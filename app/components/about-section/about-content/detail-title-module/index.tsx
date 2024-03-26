interface DetailTitleProps {
    title: string;
}

const DetailTitle: React.FC<DetailTitleProps> = ({ title }) => {

    const titleId = `about-${title}-detail`;

    return (
        <h3
            className="sm:text-lg md:text-xl uppercase font-bold tracking-widest text-center"
            id={titleId}
            style={{
                fontFamily: '"Poppins", sans-serif',
                lineHeight: '3rem',
                letterSpacing: '.2rem'
            }}
        >
            {title}
        </h3>
    );
};

export default DetailTitle;