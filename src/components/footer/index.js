function Footer() {
    return (
        <div className="footer_container">
            <div className="horizontal_line"></div>
            <div className="content">
                Project by
                <a
                    className="footer_link"
                    href="https://sugatdhole.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {` @Sugat `}
                </a>
                | Powered by @React
            </div>
        </div>
    )
};

export default Footer;