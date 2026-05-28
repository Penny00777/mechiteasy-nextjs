import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { HiOutlineArrowLeft, HiOutlinePhoto, HiOutlineCube, HiOutlineSparkles } from 'react-icons/hi2';
import ImageSlider from './ImageSlider';

export default function WorkDetailsPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const workData = {
        'functional-products': {
            title: 'Custom Designed and Printed Parts',
            description: 'Solving real-world problems with custom 3D printed functional parts.',
            folder: 'images/categories/functional-products',
            blogContent: `
                <div class="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                    <p>We tackle a vast array of functional consumer needs. For example, we faced a problem of venting out the toxic fumes produced by our resin printer, so we designed a custom exhaust adapter. This adapter houses the exhaust fan and attaches directly to the printer's backside, with a pipe that safely directs the toxic fumes outside through ventilation. This was a necessary custom solution designed for our first SLA 3D printer.</p>
                    
                    <p>We also tackle custom consumer requests, such as a phone cooler peltier case. Designed per a customer's request who needed a custom, lightweight phone cooling system, we designed a specialized case to house a peltier module. It attaches directly to the back of the phone, ensuring it remains cool during intense mobile gaming sessions.</p>

                    <h4 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Restoration & Modification</h4>
                    <p>Another unique challenge was a ripped-off front mouth vent of a Leatt helmet. We took precise measurements, modeled a mockup design in SolidWorks to check fitment, and after 3 iterations, achieved the perfect design matching the original aesthetics. We then 3D printed and installed it.</p>

                    <h4 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Custom Tooling & Accessories</h4>
                    <p>From pottery debossing stamps—designed by importing SVG files into Fusion 360 and SLA resin-printing them for perfect debossing results—to custom mobile phone holders designed to attach securely to a monitor base stem for stable recording angles, we use a mix of SLA and FDM printing to create robust, functional solutions for our workspace and our customers.</p>
                </div>
            `
        },
        'lithophane-lamps': {
            title: 'Lithophane-Based Custom Lamps',
            description: 'Personalized glowing photo frames acting as aesthetic study lamps.',
            folder: 'images/categories/lithophane-photo-frame-lamps',
            blogContent: `
                <div class="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                    <p>Our custom resin-printed lithophane lamps are a unique way to bring memories to light. Each lamp houses a highly detailed, 3D printed lithophane photo frame that is illuminated by an internal LED bulb. When the LED glows, the varying thicknesses of the resin reveal the customer's chosen image beautifully.</p>
                    
                    <p>These pieces act as both a glowing photo frame holder and an aesthetic study lamp. We specifically use warm yellow LED options to provide a comforting, aesthetic vibe, intended to be kept on a study table or anywhere else the customer desires. In the stand section, we also offer the option of debossing or printing the customer's name or a small note they want to feature.</p>
                </div>
            `
        },
        'master-molds': {
            title: 'Design and Fabrication of Molds',
            description: 'High-detail resin-printed master molds for various casting applications.',
            folder: 'images/categories/master-molds',
            blogContent: `
                <div class="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                    <p>Whether it's for culinary arts or industrial casting, precision is key. For one of our customers, we designed custom chocolate shaper molds. The customer wanted a mold which would help him pour-mold his chocolates into specific shapes. We designed the mold in Fusion 360 precisely to their dimensional and shape requirements. As this required perfect surface detailing, we proceeded with SLA resin printing and delivered a high-fidelity master.</p>

                    <h4 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Versatile Master Molds</h4>
                    <p>We have designed master molds for every customer requirement. Customers share images or concepts of things they want the master mold of, and we design the 3D CAD model and resin print it. These prints need to be of extremely high resolution, as they will later be used for making secondary production molds (like silicone) for casting statues, custom logos (like the Keshav, Champapur, and Butwal logos), and more.</p>
                </div>
            `
        },
        'customization-design-help': {
            title: 'Design Modifications and DIY Help',
            description: 'Consultation, CAD redesigns, and component sourcing for DIY projects.',
            folder: 'images/categories/customisation-design-help',
            blogContent: `
                <div class="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                    <p>We regularly consult our customers for design changes and 3D printing requirements, helping them understand the engineering constraints of their projects and choose what kind of 3D printing (SLA or FDM) will be most suitable for their specific needs.</p>

                    <p>Beyond printing, we help fetch different components required for making DIY projects—such as aquarium egg collector components and digital microscope stands. We also completely redesign parts in CAD for better performance, optimizing strength-to-weight ratios, and adjusting tolerances to better fit their unique requirements.</p>
                </div>
            `
        },
        'collectibles-and-figures': {
            title: 'SLA Printed Miniatures and Other Items',
            description: 'High-resolution resin prints of complex characters and figures.',
            folder: 'images/categories/collectibles-and-figures/anime-characters-and-miscellaneous',
            blogContent: `
                <div class="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                    <p>Using high-resolution SLA resin printing, we have brought countless characters and models into the physical world. We have successfully printed several complex anime characters, Warhammer miniatures, and other intricate PC game character 3D models.</p>

                    <p>Our SLA process ensures that even the most microscopic details, textures, and features of these miscellaneous items are captured perfectly as per our customers' exact requirements. The smooth surface finish makes them immediately ready for priming and painting by the customer.</p>
                </div>
            `
        },
        'stem-kits-development': {
            title: 'STEM Kits Development',
            description: 'Educational kits and mechanical assemblies.',
            folder: 'images/categories/mech-it-easy-kits',
            blogContent: `
                <div class="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                    <p>We are constantly developing educational STEM kits to help students grasp complex mechanical and scientific principles in a hands-on way.</p>
                    <p>From math exploration tools to hand-crank generators, these kits are completely designed, prototyped, and manufactured using our fleet of 3D printers.</p>
                </div>
            `
        }
    };

    const data = workData[slug as keyof typeof workData];

    if (!data) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Portfolio Category Not Found</h1>
                <Link href="/about-us" className="text-emerald-500 hover:text-emerald-600 font-medium flex items-center gap-2">
                    <HiOutlineArrowLeft /> Back to About Us
                </Link>
            </div>
        );
    }

    // Read images from the specified folder
    let images: string[] = [];
    try {
        const publicDir = path.join(process.cwd(), 'public');
        
        const targetDir = path.join(publicDir, data.folder);
        if (fs.existsSync(targetDir)) {
            let files = fs.readdirSync(targetDir);
            
            images = files
                .filter(file => {
                    const l = file.toLowerCase();
                    return l.endsWith('.jpg') || l.endsWith('.png') || l.endsWith('.jpeg') || l.endsWith('.webp') || l.endsWith('.avif');
                })
                .map(file => '/' + data.folder + '/' + file);
                
            if (slug === 'master-molds') {
                const chocoDir = path.join(targetDir, 'chocolate-molds');
                if (fs.existsSync(chocoDir)) {
                    const chocoFiles = fs.readdirSync(chocoDir);
                    const chocoImages = chocoFiles
                        .filter(file => {
                            const l = file.toLowerCase();
                            return l.endsWith('.jpg') || l.endsWith('.png') || l.endsWith('.jpeg') || l.endsWith('.webp') || l.endsWith('.avif');
                        })
                        .map(file => '/' + data.folder + '/chocolate-molds/' + file);
                    images = [...images, ...chocoImages];
                }
            }
        }
    } catch (e) {
        console.error("Error reading directory", e);
    }

    return (
        <div className="w-full relative min-h-screen py-16 lg:py-24">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full dark:bg-emerald-900/20" />
                <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-sky-500/10 blur-[100px] rounded-full dark:bg-sky-900/20" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                
                {/* Header Section */}
                <div className="space-y-6 max-w-4xl">
                    <Link href="/about-us" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors">
                        <HiOutlineArrowLeft className="h-4 w-4" />
                        Back to About Us
                    </Link>
                    
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                        {data.title}
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300">
                        {data.description}
                    </p>
                </div>

                <div className="flex flex-col gap-12 lg:gap-16">
                    {/* Blog Content - Centered on Top */}
                    <div className="w-full max-w-5xl mx-auto h-fit relative z-10">
                        <div className="relative overflow-hidden bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl">
                            
                            {/* Decorative Icon Background */}
                            <div className="absolute -top-10 -right-10 text-slate-100 dark:text-slate-800/50">
                                <HiOutlineCube className="w-64 h-64" />
                            </div>

                            {/* Header section with icons and highlight color */}
                            <div className="flex items-center gap-6 mb-10 relative z-10">
                                {/* Static Icon Box */}
                                <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-500 shadow-lg shadow-emerald-500/20">
                                    <HiOutlineSparkles className="h-8 w-8 text-white" />
                                </div>
                                
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 mb-1">The Story</h3>
                                    <h2 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-sky-600 dark:from-emerald-400 dark:to-sky-400">
                                        Project Details
                                    </h2>
                                </div>
                            </div>

                            {/* Main Text Content */}
                            <div className="prose prose-lg prose-slate dark:prose-invert prose-emerald max-w-none relative z-10 
                                prose-p:leading-loose prose-p:text-slate-600 dark:prose-p:text-slate-300
                                prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white
                                prose-a:text-emerald-500 hover:prose-a:text-emerald-600
                                marker:text-emerald-500
                            " dangerouslySetInnerHTML={{ __html: data.blogContent }} />
                        </div>
                    </div>

                    {/* Image Slider Component */}
                    <ImageSlider images={images} title={data.title} />
                </div>

            </div>
        </div>
    );
}
