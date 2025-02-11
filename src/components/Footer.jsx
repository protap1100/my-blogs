const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-semibold">Protap s Blog</h2>
                <p className="mt-2 text-gray-400">Sharing knowledge, ideas, and experiences.</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>

                {/* Copyright */}
                <p className="mt-4 text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Protap Biswas. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
