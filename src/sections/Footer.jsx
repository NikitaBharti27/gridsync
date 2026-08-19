import { IoGrid } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg hover:scale-105 transition cursor-default">
            <div className="w-7 h-7 bg-indigo-600 text-white rounded-lg flex items-center justify-center">
              <IoGrid className="text-base" />
            </div>
            <span>GridSync</span>
          </div>
          <p className="text-sm text-slate-500">
            Professional grid and aesthetic planning for creators and designers.
          </p>
          <p className="text-xs text-slate-400">
            © 2026 GridSync. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-indigo-600 transition">Features</a></li>
            <li><a href="#demo" className="hover:text-indigo-600 transition">Showcase</a></li>
            <li><a href="#pricing" className="hover:text-indigo-600 transition">Pricing</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Integrations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-600 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">API Docs</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Community</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Tutorials</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-600 transition">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Careers</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Contact</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Privacy Policy</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;