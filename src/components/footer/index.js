function Footer() {
    return (
        <div className="footer_container">
            <div className="horizontal_line"></div>
            <div className="content">
                Project by
                <a
                    className="footer_link"
                    href="https://github.com/Shikhachandel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {` @Shikha `}
                </a>
                | Powered by @React
            </div>
        </div>
    )
};

export default Footer;