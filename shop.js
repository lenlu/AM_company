
// Product Data
const products = [
    { id: 'ncl000', name: 'AM-COMPANY Consciousness Link v5.0', price: 149999.00, image: 'images/am_link.png', description: 'Step into the next evolution of human-digital convergence. A direct systems bridge to the infinite expanse.' },
    { id: 'np001', name: 'AM-COMPANY Processor Unit', price: 49999.00, image: 'https://via.placeholder.com/200x150/00ffff/000000?text=AM-COMPANY+Processor', description: 'Experience unparalleled processing power for AI and data analysis.' },
    { id: 'qhd002', name: 'Quantum Holographic Display', price: 79999.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Quantum+Display', description: 'Project stunning 3D visuals directly into your environment.' },
    { id: 'edd003', name: 'Encrypted Data Drive (10TB)', price: 24999.00, image: 'https://via.placeholder.com/200x150/8000ff/000000?text=Secure+Drive', description: 'Military-grade encryption for your most sensitive digital assets.' },
    { id: 'dac004', name: 'Digital Art Canvas', price: 15000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Digital+Art+Canvas', description: 'Pressure-sensitive surface for creating futuristic art.' },
    { id: 'acm005', name: 'AI Companion Module', price: 10000.00, image: 'https://via.placeholder.com/200x150/e0a3ff/000000?text=AI+Companion+Module', description: 'Personalized AI assistant for daily tasks and learning.' },
    { id: 'pae006', name: 'Predictive Analytics Engine', price: 45000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Predictive+Analytics+Engine', description: 'Forecast trends and make data-driven decisions.' },
    { id: 'qlu007', name: 'Quantum Logic Unit', price: 40000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Quantum+Logic+Unit', description: 'Next-gen processing for complex simulations.' },
    { id: 'nih008', name: 'AM-COMPANY Interface Headset', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=AM-COMPANY+Interface+Headset', description: 'Connect directly to digital realms with advanced system control.' },
    { id: 'acg009', name: 'AI-Powered Content Generator', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=AI-Powered+Content+Generator', description: 'Automatically create text, images, and videos.' },
    { id: 'cep010', name: 'Cognitive Enhancement Patch', price: 10000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Cognitive+Enhancement+Patch', description: 'Boost focus and memory with non-invasive neuro-stimulation.' },
    { id: 'utd011', name: 'Universal Translator Device', price: 25000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Universal+Translator+Device', description: 'Real-time translation for any language.' },
    { id: 'dts012', name: 'Digital Twin Software', price: 30000.00, image: 'https://via.placeholder.com/200x150/e0a3ff/000000?text=Digital+Twin+Software', description: 'Create virtual replicas of physical assets for monitoring.' },
    { id: 'nlp013', name: 'Neuro-Linguistic Processor', price: 35000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Neuro-Linguistic+Processor', description: 'Advanced natural language understanding and generation.' },
    { id: 'sfw014', name: 'Smart Fabric Weave', price: 10000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Smart+Fabric+Weave', description: 'Integrate electronics seamlessly into clothing.' },
    { id: 'hpm015', name: 'Holo-Projector Mini', price: 25000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Holo-Projector+Mini', description: 'Compact device for personal holographic displays.' },
    { id: 'css016', name: 'Cyber-Security Suite Pro', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Cyber-Security+Suite+Pro', description: 'Advanced AI-driven threat detection and prevention.' },
    { id: 'dso017', name: 'Data Stream Optimizer', price: 10000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Data+Stream+Optimizer', description: 'Enhance network speed and reduce latency.' },
    { id: 'bfm018', name: 'Bio-Feedback Monitor', price: 15000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Bio-Feedback+Monitor', description: 'Real-time health and cognitive performance tracking.' },
    { id: 'arg019', name: 'Augmented Reality Goggles', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Augmented+Reality+Goggles', description: 'Immersive AR experience with crystal-clear optics.' },
    { id: 'mdk020', name: 'Modular Drone Kit', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Modular+Drone+Kit', description: 'Build and customize your own autonomous aerial vehicle.' },
    { id: 'qsc021', name: 'Quantum Storage Crystal', price: 25000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Quantum+Storage+Crystal', description: 'Terabytes of secure, high-speed data storage.' },
    { id: 'vwc022', name: 'Virtual Workspace Creator', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Virtual+Workspace+Creator', description: 'Design and share collaborative virtual environments.' },
    { id: 'eat023', name: 'Ethical AI Toolkit', price: 10000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Ethical+AI+Toolkit', description: 'Tools for developing responsible and unbiased AI systems.' },
    { id: 'tfg024', name: 'Tactile Feedback Gloves', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Tactile+Feedback+Gloves', description: 'Experience virtual objects with realistic touch sensations.' },
    { id: 'ehu025', name: 'Energy Harvesting Unit', price: 15000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Energy+Harvesting+Unit', description: 'Power your devices with ambient environmental energy.' },
    { id: 'shh026', name: 'Smart Home Hub Pro', price: 10000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Smart+Home+Hub+Pro', description: 'Centralized control for all your smart home devices.' },
    { id: 'dcw027', name: 'Digital Currency Wallet (Hardware)', price: 15000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Digital+Currency+Wallet+(Hardware)', description: 'Secure offline storage for cryptocurrencies.' },
    { id: 'ama028', name: 'AI-Driven Market Analyzer', price: 40000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=AI-Driven+Market+Analyzer', description: 'Real-time insights and predictions for financial markets.' },
    { id: 'pnf029', name: 'Personalized News Feed AI', price: 10000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Personalized+News+Feed+AI', description: 'Curated news and information tailored to your interests.' },
    { id: 'ihp030', name: 'Interactive Holographic Pet', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Interactive+Holographic+Pet', description: 'A lifelike holographic companion that interacts with you.' },
    { id: 'qem031', name: 'Quantum Encryption Module', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Quantum+Encryption+Module', description: 'Hardware-based quantum-safe encryption.' },
    { id: 'adb032', name: 'Autonomous Delivery Bot', price: 25000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Autonomous+Delivery+Bot', description: 'Small, programmable robot for local deliveries.' },
    { id: 'dfd033', name: 'Digital Fashion Designer AI', price: 15000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Digital+Fashion+Designer+AI', description: 'AI that helps create and visualize custom clothing designs.' },
    { id: 'scl034', name: 'Smart Contact Lenses', price: 35000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Smart+Contact+Lenses', description: 'Overlay digital information directly onto your vision.' },
    { id: 'ucp035', name: 'Universal Charging Pad', price: 5000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Universal+Charging+Pad', description: 'Wirelessly charge multiple devices simultaneously.' },
    { id: 'alt036', name: 'AI-Powered Language Tutor', price: 10000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=AI-Powered+Language+Tutor', description: 'Interactive language learning with real-time feedback.' },
    { id: 'mrb037', name: 'Modular Robotics Kit', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Modular+Robotics+Kit', description: 'Build and program various robots with interchangeable parts.' },
    { id: 'cpi038', name: 'Cybernetic Prosthetic Interface', price: 40000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Cybernetic+Prosthetic+Interface', description: 'Advanced control for prosthetic limbs.' },
    { id: 'ddd039', name: 'Digital Detox Device', price: 5000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Digital+Detox+Device', description: 'Helps manage screen time and digital distractions.' },
    { id: 'pes040', name: 'Personal Energy Shield', price: 50000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Personal+Energy+Shield', description: 'A conceptual device for personal protection.' },
    { id: 'qlu041', name: 'Quantum Logic Unit v2.0', price: 50000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Quantum+Logic+Unit+v2.0', description: 'Next-gen processing for complex simulations.' },
    { id: 'hpm042', name: 'Holo-Projector Mini v2.0', price: 35000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Holo-Projector+Mini+v2.0', description: 'Compact device for personal holographic displays.' },
    { id: 'nih043', name: 'AM-COMPANY Interface Headset v2.0', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=AM-COMPANY+Interface+Headset+v2.0', description: 'Connect directly to digital realms with advanced system control.' },
    { id: 'css044', name: 'Cyber-Security Suite Pro v2.0', price: 40000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Cyber-Security+Suite+Pro+v2.0', description: 'Advanced AI-driven threat detection and prevention.' },
    { id: 'asm045', name: 'Adaptive Sound Module', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Adaptive+Sound+Module', description: 'Generates dynamic soundscapes based on user activity.' },
    { id: 'dso046', name: 'Data Stream Optimizer v2.0', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Data+Stream+Optimizer+v2.0', description: 'Enhance network speed and reduce latency.' },
    { id: 'bfm047', name: 'Bio-Feedback Monitor v2.0', price: 25000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Bio-Feedback+Monitor+v2.0', description: 'Real-time health and cognitive performance tracking.' },
    { id: 'arg048', name: 'Augmented Reality Goggles v2.0', price: 40000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Augmented+Reality+Goggles+v2.0', description: 'Immersive AR experience with crystal-clear optics.' },
    { id: 'dac049', name: 'Digital Art Canvas v2.0', price: 25000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Digital+Art+Canvas+v2.0', description: 'Pressure-sensitive surface for creating futuristic art.' },
    { id: 'acm050', name: 'AI Companion Module v2.0', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=AI+Companion+Module+v2.0', description: 'Personalized AI assistant for daily tasks and learning.' },
    { id: 'mdk051', name: 'Modular Drone Kit v2.0', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Modular+Drone+Kit+v2.0', description: 'Build and customize your own autonomous aerial vehicle.' },
    { id: 'qsc052', name: 'Quantum Storage Crystal v2.0', price: 35000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Quantum+Storage+Crystal+v2.0', description: 'Terabytes of secure, high-speed data storage.' },
    { id: 'vwc053', name: 'Virtual Workspace Creator v2.0', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Virtual+Workspace+Creator+v2.0', description: 'Design and share collaborative virtual environments.' },
    { id: 'eat054', name: 'Ethical AI Toolkit v2.0', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Ethical+AI+Toolkit+v2.0', description: 'Tools for developing responsible and unbiased AI systems.' },
    { id: 'nlp055', name: 'Neuro-Linguistic Processor v2.0', price: 45000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Neuro-Linguistic+Processor+v2.0', description: 'Advanced natural language understanding and generation.' },
    { id: 'tfg056', name: 'Tactile Feedback Gloves v2.0', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Tactile+Feedback+Gloves+v2.0', description: 'Experience virtual objects with realistic touch sensations.' },
    { id: 'ehu057', name: 'Energy Harvesting Unit v2.0', price: 25000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Energy+Harvesting+Unit+v2.0', description: 'Power your devices with ambient environmental energy.' },
    { id: 'pae058', name: 'Predictive Analytics Engine v2.0', price: 55000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Predictive+Analytics+Engine+v2.0', description: 'Forecast trends and make data-driven decisions.' },
    { id: 'dts059', name: 'Digital Twin Software v2.0', price: 40000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Digital+Twin+Software+v2.0', description: 'Create virtual replicas of physical assets for monitoring.' },
    { id: 'sfw060', name: 'Smart Fabric Weave v2.0', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Smart+Fabric+Weave+v2.0', description: 'Integrate electronics seamlessly into clothing.' },
    { id: 'cep061', name: 'Cognitive Enhancement Patch v2.0', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Cognitive+Enhancement+Patch+v2.0', description: 'Boost focus and memory with non-invasive neuro-stimulation.' },
    { id: 'utd062', name: 'Universal Translator Device v2.0', price: 35000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Universal+Translator+Device+v2.0', description: 'Real-time translation for any language.' },
    { id: 'pla063', name: 'Personalized Learning AI', price: 15000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Personalized+Learning+AI', description: 'Adaptive education platform tailored to your needs.' },
    { id: 'sqv064', name: 'Secure Quantum VPN', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Secure+Quantum+VPN', description: 'Unbreakable internet privacy and anonymity.' },
    { id: 'rad065', name: 'Robotic Arm Developer Kit', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Robotic+Arm+Developer+Kit', description: 'Programmable robotic arm for automation and research.' },
    { id: 'sae066', name: 'Spatial Audio Emitter', price: 25000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Spatial+Audio+Emitter', description: 'Create immersive 3D sound fields in any room.' },
    { id: 'dls067', name: 'Dynamic Lighting System', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Dynamic+Lighting+System', description: 'Adaptive lighting that responds to your mood and environment.' },
    { id: 'gcs068', name: 'Gesture Control Sensor', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Gesture+Control+Sensor', description: 'Interact with devices using intuitive hand movements.' },
    { id: 'bak069', name: 'Biometric Authentication Key', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Biometric+Authentication+Key', description: 'Secure access with advanced fingerprint and iris scanning.' },
    { id: 'cga070', name: 'Cloud Gaming Accelerator', price: 25000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Cloud+Gaming+Accelerator', description: 'Optimize streaming and reduce lag for cloud-based games.' },
    { id: 'acg071', name: 'AI-Powered Content Generator v3.0', price: 35000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=AI-Powered+Content+Generator+v3.0', description: 'Automatically create text, images, and videos.' },
    { id: 'whs072', name: 'Wearable Health Scanner', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Wearable+Health+Scanner', description: 'Continuous monitoring of vital signs and health metrics.' },
    { id: 'mcb073', name: 'Modular Computing Block', price: 40000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Modular+Computing+Block', description: 'Stackable components for custom high-performance computers.' },
    { id: 'efp074', name: 'Eco-Friendly Power Cell', price: 15000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Eco-Friendly+Power+Cell', description: 'Sustainable energy source for portable devices.' },
    { id: 'vpa075', name: 'Virtual Pet AI', price: 15000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Virtual+Pet+AI', description: 'An intelligent digital companion that learns and grows.' },
    { id: 'shh076', name: 'Smart Home Hub Pro v3.0', price: 25000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Smart+Home+Hub+Pro+v3.0', description: 'Centralized control for all your smart home devices.' },
    { id: 'dcw077', name: 'Digital Currency Wallet (Hardware) v3.0', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Digital+Currency+Wallet+(Hardware)+v3.0', description: 'Secure offline storage for cryptocurrencies.' },
    { id: 'ama078', name: 'AI-Driven Market Analyzer v3.0', price: 55000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=AI-Driven+Market+Analyzer+v3.0', description: 'Real-time insights and predictions for financial markets.' },
    { id: 'pnf079', name: 'Personalized News Feed AI v3.0', price: 25000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Personalized+News+Feed+AI+v3.0', description: 'Curated news and information tailored to your interests.' },
    { id: 'ihp080', name: 'Interactive Holographic Pet v3.0', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Interactive+Holographic+Pet+v3.0', description: 'A lifelike holographic companion that interacts with you.' },
    { id: 'qem081', name: 'Quantum Encryption Module v3.0', price: 45000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Quantum+Encryption+Module+v3.0', description: 'Hardware-based quantum-safe encryption.' },
    { id: 'adb082', name: 'Autonomous Delivery Bot v3.0', price: 40000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Autonomous+Delivery+Bot+v3.0', description: 'Small, programmable robot for local deliveries.' },
    { id: 'dfd083', name: 'Digital Fashion Designer AI v3.0', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Digital+Fashion+Designer+AI+v3.0', description: 'AI that helps create and visualize custom clothing designs.' },
    { id: 'scl084', name: 'Smart Contact Lenses v3.0', price: 50000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Smart+Contact+Lenses+v3.0', description: 'Overlay digital information directly onto your vision.' },
    { id: 'ucp085', name: 'Universal Charging Pad v3.0', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Universal+Charging+Pad+v3.0', description: 'Wirelessly charge multiple devices simultaneously.' },
    { id: 'alt086', name: 'AI-Powered Language Tutor v3.0', price: 25000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=AI-Powered+Language+Tutor+v3.0', description: 'Interactive language learning with real-time feedback.' },
    { id: 'mrb087', name: 'Modular Robotics Kit v3.0', price: 35000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Modular+Robotics+Kit+v3.0', description: 'Build and program various robots with interchangeable parts.' },
    { id: 'cpi088', name: 'Cybernetic Prosthetic Interface v3.0', price: 55000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Cybernetic+Prosthetic+Interface+v3.0', description: 'Advanced control for prosthetic limbs.' },
    { id: 'ddd089', name: 'Digital Detox Device v3.0', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Digital+Detox+Device+v3.0', description: 'Helps manage screen time and digital distractions.' },
    { id: 'pes090', name: 'Personal Energy Shield v3.0', price: 65000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Personal+Energy+Shield+v3.0', description: 'A conceptual device for personal protection.' },
    { id: 'qlu091', name: 'Quantum Logic Unit v4.0', price: 55000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Quantum+Logic+Unit+v4.0', description: 'Next-gen processing for complex simulations.' },
    { id: 'hpm092', name: 'Holo-Projector Mini v4.0', price: 45000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Holo-Projector+Mini+v4.0', description: 'Compact device for personal holographic displays.' },
    { id: 'nih093', name: 'AM-COMPANY Interface Headset v4.0', price: 40000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=AM-COMPANY+Interface+Headset+v4.0', description: 'Connect directly to digital realms with advanced system control.' },
    { id: 'css094', name: 'Cyber-Security Suite Pro v4.0', price: 50000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Cyber-Security+Suite+Pro+v4.0', description: 'Advanced AI-driven threat detection and prevention.' },
    { id: 'asm095', name: 'Adaptive Sound Module v3.0', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Adaptive+Sound+Module+v3.0', description: 'Generates dynamic soundscapes based on user activity.' },
    { id: 'dso096', name: 'Data Stream Optimizer v4.0', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Data+Stream+Optimizer+v4.0', description: 'Enhance network speed and reduce latency.' },
    { id: 'bfm097', name: 'Bio-Feedback Monitor v4.0', price: 35000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Bio-Feedback+Monitor+v4.0', description: 'Real-time health and cognitive performance tracking.' },
    { id: 'arg098', name: 'Augmented Reality Goggles v4.0', price: 50000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Augmented+Reality+Goggles+v4.0', description: 'Immersive AR experience with crystal-clear optics.' },
    { id: 'dac099', name: 'Digital Art Canvas v4.0', price: 35000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Digital+Art+Canvas+v4.0', description: 'Pressure-sensitive surface for creating futuristic art.' },
    { id: 'acm100', name: 'AI Companion Module v4.0', price: 30000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=AI+Companion+Module+v4.0', description: 'Personalized AI assistant for daily tasks and learning.' },
    { id: 'aec101', name: 'AI Ethics Compliance Module', price: 18000.00, image: 'https://via.placeholder.com/200x150/00ffff/000000?text=AI+Ethics+Module', description: 'Ensures AI systems adhere to ethical guidelines and regulations.' },
    { id: 'nnd102', name: 'AM-COMPANY Network Debugger', price: 28000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=AM-COMPANY+Debugger', description: 'Visualizes and debugs complex system architectures in real-time.' },
    { id: 'hmp103', name: 'Holographic Meeting Projector', price: 65000.00, image: 'https://via.placeholder.com/200x150/8000ff/000000?text=Holo+Projector', description: 'Projects lifelike 3D holograms for immersive remote collaboration.' },
    { id: 'bisa104', name: 'Bio-Integrated Sensor Array', price: 22000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Bio+Sensor+Array', description: 'Monitors biological data for enhanced human-machine interaction.' },
    { id: 'qde105', name: 'Quantum Data Encryptor', price: 38000.00, image: 'https://via.placeholder.com/200x150/e0a3ff/000000?text=Quantum+Encryptor', description: 'Provides quantum-safe encryption for ultimate data security and privacy.' },
    { id: 'clo106', name: 'Cognitive Load Optimizer', price: 15000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Cognitive+Optimizer', description: 'AI-driven system to reduce mental fatigue and improve focus.' },
    { id: 'auif107', name: 'Adaptive UI Framework', price: 20000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Adaptive+UI', description: 'Dynamically adjusts user interfaces based on user behavior and context.' },
    { id: 'pmd108', name: 'Predictive Maintenance Drone', price: 42000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Maintenance+Drone', description: 'Autonomous drone for industrial inspection and fault prediction.' },
    { id: 'srg109', name: 'Synthetic Reality Generator', price: 55000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Synthetic+Reality', description: 'Creates highly realistic virtual environments for training and entertainment.' },
    { id: 'ttc110', name: 'Thought-to-Text Converter', price: 32000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Thought+to+Text', description: 'Translates system impulses directly into written text with high accuracy.' },
    { id: 'ers111', name: 'Emotion Recognition Software', price: 19000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Emotion+AI', description: 'Analyzes facial expressions and vocal tones to understand user emotions.' },
    { id: 'dal112', name: 'Decentralized AI Ledger', price: 27000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=AI+Ledger', description: 'Blockchain-based system for secure and transparent AI model sharing.' },
    { id: 'pqcd113', name: 'Personal Quantum Cloud Drive', price: 39000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Quantum+Cloud', description: 'Secure, high-capacity cloud storage with quantum data integrity.' },
    { id: 'acpi114', name: 'Advanced Cyber-Physical Interface', price: 48000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Cyber-Physical+Interface', description: 'Seamlessly integrates digital commands with physical systems and robotics.' },
    { id: 'seap115', name: 'Self-Evolving Algorithm Pack', price: 26000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Evolving+Algorithms', description: 'Algorithms that learn, adapt, and optimize themselves over time.' },
    { id: 'msfu116', name: 'Multi-Sensory Feedback Unit', price: 23000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Multi-Sensory+Unit', description: 'Provides haptic, auditory, and visual feedback for immersive experiences.' },
    { id: 'apla117', name: 'AI-Powered Legal Assistant', price: 31000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Legal+AI', description: 'Automates legal research, document generation, and compliance checks.' },
    { id: 'deh118', name: 'Dynamic Energy Harvester', price: 17000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Energy+Harvester', description: 'Converts ambient environmental energy into usable power for devices.' },
    { id: 'sbl119', name: 'Secure Biometric Lock', price: 14000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Biometric+Lock', description: 'Advanced security system using multi-modal biometric authentication.' },
    { id: 'vcai120', name: 'Virtual Companion AI (Premium)', price: 36000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Virtual+Companion+AI', description: 'Highly advanced, emotionally intelligent AI companion with adaptive personality.' },
    { id: 'nps121', name: 'AM-COMPANY Pathway Stimulator', price: 29000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=AM-COMPANY+Stimulator', description: 'Device to enhance cognitive functions, memory, and learning capabilities.' },
    { id: 'dsad122', name: 'Data Stream Anomaly Detector', price: 21000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Anomaly+Detector', description: 'Real-time detection of unusual patterns and threats in data flows.' },
    { id: 'uapt123', name: 'Universal API Translator', price: 24000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=API+Translator', description: 'Bridges incompatible APIs for seamless system integration and data exchange.' },
    { id: 'alm124', name: 'Adaptive Learning Module', price: 16000.00, image: 'https://via.placeholder.com/200x150/ff69b4/000000?text=Adaptive+Learning', description: 'AI-driven educational tool that personalizes learning paths and content.' },
    { id: 'zlch125', name: 'Zero-Latency Communication Hub', price: 40000.00, image: 'https://via.placeholder.com/200x150/ff0080/000000?text=Zero-Latency+Comm', description: 'Enables instantaneous communication across vast distances with no perceptible delay.' },
];

const digitalMediaPacks = [
    { id: 'cui001', name: 'Cyberpunk UI Themes', price: 2999.00, image: 'https://via.placeholder.com/200x150/e0a3ff/000000?text=Cyberpunk+Themes', description: 'Transform your interface with dynamic, futuristic visual themes.' },
    { id: 'ais002', name: 'Adaptive AI Soundscapes', price: 3999.00, image: 'https://via.placeholder.com/200x150/9370db/000000?text=AI+Soundscapes', description: 'Immersive audio environments that react to your digital activity.' },
];

// Shopping Cart Logic
let cart = [];

const featuredProductsContainer = document.getElementById('featured-products-container');
const digitalMediaPacksContainer = document.getElementById('digital-media-packs-container');
const allProductsContainer = document.getElementById('all-products-container');
const cartItemsList = document.getElementById('cart-items-list');
const cartTotalSpan = document.getElementById('cart-total');
const cartItemCountSpan = document.getElementById('cart-item-count');
const downloadReceiptBtn = document.getElementById('download-receipt-btn');
const downloadTextBtn = document.getElementById('download-text-btn');
const downloadCsvBtn = document.getElementById('download-csv-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const heroShowcaseContainer = document.getElementById('hero-product-showcase');


function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function loadCart() {
    const storedCart = localStorage.getItem('shopCart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

function saveCart() {
    localStorage.setItem('shopCart', JSON.stringify(cart));
}

function renderProductCard(product, isDigitalPack = false, index = 0) {
    const productWrapper = document.createElement('div');
    productWrapper.className = 'product-card-wrapper';
    productWrapper.style.animationDelay = `${index * 0.1}s`;

    const productCard = document.createElement('div');
    productCard.className = 'glass product-card-hover';
    productCard.style.cssText = `
        padding: 30px;
        border-radius: 20px;
        text-align: center;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        cursor: pointer;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        position: relative;
        overflow: hidden;
    `;
    
    // Add a subtle glow for digital packs
    if (isDigitalPack) {
        productCard.style.boxShadow = 'inset 0 0 20px rgba(224, 163, 255, 0.05)';
    }

    productCard.innerHTML = `
        <div>
            <div style="overflow: hidden; border-radius: 12px; margin-bottom: 20px; height: 180px; background: rgba(0,0,0,0.2);">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
            </div>
            <h3 style="font-size: 1.4rem; color: ${isDigitalPack ? '#e0a3ff' : '#00ffff'}; margin-bottom: 12px; font-weight: 700; height: 3.2rem; display: flex; align-items: center; justify-content: center; line-height: 1.2;">${product.name}</h3>
            <p style="color: #aaaaaa; margin-bottom: 20px; font-size: 0.9rem; line-height: 1.5; height: 4.5rem; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">${product.description}</p>
        </div>
        <div>
            <div style="font-size: 1.6rem; font-weight: 800; color: #ff69b4; margin-bottom: 20px;">${formatPrice(product.price)}</div>
            
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 20px; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                <label style="color: #666; font-size: 0.75rem; text-transform: uppercase; font-weight: 700;">Qty:</label>
                <input type="number" class="product-qty-input" value="1" min="1" max="99" style="width: 50px; background: transparent; border: none; color: #fff; text-align: center; font-weight: 700; font-size: 1rem; outline: none;">
            </div>

            <button class="cta-button add-to-cart-btn" data-product-id="${product.id}" style="width: 100%; padding: 14px; font-weight: 700; letter-spacing: 1px; font-size: 0.8rem;">
                ${isDigitalPack ? 'INSTANT ACCESS' : 'ADD TO AM-CART'}
            </button>
        </div>
    `;
    
    productWrapper.appendChild(productCard);

    // Hover effects
    productCard.addEventListener('mouseenter', () => {
        const img = productCard.querySelector('img');
        if (img) img.style.transform = 'scale(1.1) rotate(2deg)';
        productCard.style.transform = 'translateY(-10px)';
        productCard.style.boxShadow = isDigitalPack ? 
            '0 20px 40px rgba(224, 163, 255, 0.15), 0 0 20px rgba(224, 163, 255, 0.1)' : 
            '0 20px 40px rgba(0, 255, 255, 0.1), 0 0 20px rgba(0, 255, 255, 0.05)';
        productCard.style.borderColor = isDigitalPack ? 'rgba(224, 163, 255, 0.4)' : 'rgba(0, 255, 255, 0.3)';
    });

    productCard.addEventListener('mouseleave', () => {
        const img = productCard.querySelector('img');
        if (img) img.style.transform = 'scale(1) rotate(0)';
        productCard.style.transform = 'translateY(0)';
        productCard.style.boxShadow = 'none';
        productCard.style.borderColor = 'rgba(255, 255, 255, 0.08)';
    });

    return productWrapper;
}

function renderHeroShowcase() {
    if (!heroShowcaseContainer) return;
    
    const heroProduct = products[0]; // The new AM-COMPANY Link
    heroShowcaseContainer.innerHTML = `
        <div class="glass hero-showcase-card" style="display: flex; flex-wrap: wrap; gap: 40px; padding: 40px; border-radius: 30px; align-items: center; background: linear-gradient(135deg, rgba(224, 163, 255, 0.1), rgba(0, 255, 255, 0.05)); margin-bottom: 50px; border: 1px solid rgba(224, 163, 255, 0.2);">
            <div style="flex: 1; min-width: 300px;">
                <img src="${heroProduct.image}" alt="${heroProduct.name}" style="width: 100%; border-radius: 20px; box-shadow: 0 0 30px rgba(224, 163, 255, 0.3); transform: perspective(1000px) rotateY(-5deg);">
            </div>
            <div style="flex: 1; min-width: 300px;">
                <span style="color: #ff69b4; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; font-size: 0.9rem;">Limited Release</span>
                <h2 style="font-size: 3rem; margin: 15px 0; background: linear-gradient(45deg, #e0a3ff, #00ffff); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">${heroProduct.name}</h2>
                <p style="font-size: 1.2rem; color: #ccc; margin-bottom: 25px;">${heroProduct.description}</p>
                <div style="font-size: 2.2rem; font-weight: 800; color: #fff; margin-bottom: 30px;">${formatPrice(heroProduct.price)}</div>
                
                <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 30px;">
                    <div style="display: flex; align-items: center; gap: 15px; background: rgba(255,255,255,0.05); padding: 10px 20px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1);">
                        <span style="color: #ccc; font-size: 0.9rem;">QUANTITY</span>
                        <input type="number" class="product-qty-input" value="1" min="1" max="99" style="width: 60px; background: transparent; border: none; color: #fff; font-size: 1.2rem; font-weight: 700; text-align: center; outline: none;">
                    </div>
                </div>

                <div style="display: flex; gap: 20px;">
                    <button class="cta-button add-to-cart-btn" data-product-id="${heroProduct.id}" style="padding: 15px 40px; flex: 1;">Add to Cart</button>
                    <button class="cta-button secondary buy-now-btn" data-product-id="${heroProduct.id}" style="padding: 15px 40px; flex: 1;">Buy Now</button>
                </div>
            </div>
        </div>
    `;
}

function renderProducts() {
    renderHeroShowcase();
    
    // Render Featured Products (items 2-4 as 1 is the hero)
    if (featuredProductsContainer) {
        featuredProductsContainer.innerHTML = '';
        products.slice(1, 4).forEach((product, idx) => {
            featuredProductsContainer.appendChild(renderProductCard(product, false, idx));
        });
    }

    // Render Digital Media Packs
    if (digitalMediaPacksContainer) {
        digitalMediaPacksContainer.innerHTML = '';
        digitalMediaPacks.forEach((product, idx) => {
            digitalMediaPacksContainer.appendChild(renderProductCard(product, true, idx));
        });
    }

    // Render All Other Products
    if (allProductsContainer) {
        allProductsContainer.innerHTML = '';
        products.slice(4).forEach((product, idx) => {
            allProductsContainer.appendChild(renderProductCard(product, false, idx));
        });
    }
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId) || digitalMediaPacks.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += parseInt(quantity);
    } else {
        cart.push({ ...product, quantity: parseInt(quantity) });
    }
    saveCart();
    updateCartDisplay();
    
    // Professional visual feedback using Toast System
    if (window.showToast) {
        window.showToast(`${product.name} added to cart!`, 'success');
    }

    const btns = document.querySelectorAll(`.add-to-cart-btn[data-product-id="${productId}"]`);
    btns.forEach(btn => {
        const originalText = btn.textContent;
        btn.textContent = 'ADDED!';
        btn.classList.add('success');
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('success');
        }, 1500);
    });
}

function updateCartItemQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartDisplay();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
}

function calculateCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartDisplay() {
    cartItemsList.innerHTML = '';
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p style="color: #ccc;">Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'glass'; // Reuse glass style for cart items
            cartItemDiv.style.cssText = `
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 15px;
                margin-bottom: 10px;
                border-radius: 10px;
                background: rgba(255, 255, 255, 0.03);
            `;
            cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; border-radius: 5px; object-fit: cover;">
                <div style="flex-grow: 1;">
                    <h4 style="color: #fff; margin-bottom: 5px;">${item.name}</h4>
                    <p style="color: #ccc; font-size: 0.9em;">${formatPrice(item.price)} x ${item.quantity} = ${formatPrice(item.price * item.quantity)}</p>
                </div>
                <div style="display: flex; align-items: center; gap: 5px;">
                    <button class="cta-button cart-qty-btn" data-product-id="${item.id}" data-change="-1" style="padding: 5px 10px; font-size: 0.8em; background: rgba(255,255,255,0.1); border: none;">-</button>
                    <span style="color: #e0a3ff; font-weight: bold;">${item.quantity}</span>
                    <button class="cta-button cart-qty-btn" data-product-id="${item.id}" data-change="1" style="padding: 5px 10px; font-size: 0.8em; background: rgba(255,255,255,0.1); border: none;">+</button>
                    <button class="cta-button remove-from-cart-btn" data-product-id="${item.id}" style="padding: 5px 10px; font-size: 0.8em; background: #ff0080; border: none; margin-left: 10px;">Remove</button>
                </div>
            `;
            cartItemsList.appendChild(cartItemDiv);
        });
    }

    cartTotalSpan.textContent = formatPrice(calculateCartTotal());
    cartItemCountSpan.textContent = cart.reduce((count, item) => count + item.quantity, 0);
    // Enable/disable download buttons based on cart items
    if (downloadReceiptBtn) downloadReceiptBtn.disabled = cart.length === 0;
    if (downloadTextBtn) downloadTextBtn.disabled = cart.length === 0;
    if (downloadCsvBtn) downloadCsvBtn.disabled = cart.length === 0;
    if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
}

// Event Listeners
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart-btn') || event.target.classList.contains('buy-now-btn')) {
        const productId = event.target.dataset.productId;
        // Find the quantity input in the same card/container
        const card = event.target.closest('div').parentElement;
        const qtyInput = card.querySelector('.product-qty-input');
        const quantity = qtyInput ? parseInt(qtyInput.value) : 1;
        
        addToCart(productId, quantity);
        
        if (event.target.classList.contains('buy-now-btn')) {
            window.location.href = '#shopping-cart';
        }
    }
    if (event.target.classList.contains('cart-qty-btn')) {
        const productId = event.target.dataset.productId;
        const change = parseInt(event.target.dataset.change);
        updateCartItemQuantity(productId, change);
    }
    if (event.target.classList.contains('remove-from-cart-btn')) {
        const productId = event.target.dataset.productId;
        removeFromCart(productId);
    }
    if (event.target.id === 'download-receipt-btn') {
        generatePdfReceipt();
    }
    if (event.target.id === 'download-text-btn') {
        generateTextReceipt();
    }
    if (event.target.id === 'download-csv-btn' || event.target.id === 'checkout-btn') {
        if (event.target.id === 'checkout-btn') {
             // Optional: visual feedback for checkout
             event.target.textContent = 'PROCESSING...';
             setTimeout(() => { event.target.textContent = 'Checkout Now'; }, 2000);
        }
        event.target.id === 'checkout-btn' ? generatePdfReceipt() : generateCsvReceipt();
    }
});

/**
 * Generates a high-fidelity HTML receipt for company notification.
 */
function getReceiptHtml(orderId) {
    const userEmail = sessionStorage.getItem('userEmail') || 'N/A';
    const total = formatPrice(calculateCartTotal());
    const timestamp = new Date().toLocaleString();
    
    let itemsHtml = '';
    cart.forEach(item => {
        itemsHtml += `
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 12px; border-bottom: 1px solid #222; padding-bottom: 10px;">
          <tr style="vertical-align: middle;">
            <td style="padding: 10px 15px 10px 0; width: 60px;">
                <img src="${item.image}" alt="item" style="width: 50px; height: 50px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); object-fit: cover;">
            </td>
            <td style="width: 100%;">
              <div style="font-weight: 700; font-size: 14px; color: #ffffff; letter-spacing: 0.5px;">${item.name.toUpperCase()}</div>
              <div style="font-size: 11px; color: #888; margin-top: 4px;">SERIAL_NUM: AM-SR-${Math.floor(Math.random()*100000)} | QTY: ${item.quantity}</div>
            </td>
            <td style="white-space: nowrap; text-align: right; padding-left: 10px;">
              <strong style="color: #ff69b4; font-size: 14px;">${formatPrice(item.price * item.quantity)}</strong>
            </td>
          </tr>
        </table>`;
    });

    return `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050508; padding: 20px; color: #ffffff;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #0a0a0f; border: 1px solid #1a1a25; border-radius: 4px; overflow: hidden; box-shadow: 0 0 50px rgba(224, 163, 255, 0.1);">
    
    <!-- Cyber Header -->
    <div style="background-color: #000; padding: 30px; border-bottom: 2px solid #e0a3ff; position: relative;">
      <div style="position: absolute; top: 10px; right: 10px; color: #00ffff; font-size: 8px; font-weight: bold; font-family: monospace;">AM_CORE_v5.02</div>
      <table style="width: 100%;">
        <tr>
          <td>
            <h1 style="margin: 0; font-size: 28px; letter-spacing: -1px; color: #ffffff;">AM-<span style="color: #e0a3ff;">COMPANY</span></h1>
            <div style="font-size: 10px; color: #ff0080; letter-spacing: 2px; text-transform: uppercase; font-weight: bold; margin-top: 5px;">Digital Asset Provisioning</div>
          </td>
          <td style="text-align: right;">
             <div style="display: inline-block; padding: 5px 10px; border: 1px solid #00ff88; color: #00ff88; font-size: 10px; font-weight: bold; border-radius: 2px;">AUTHENTICATED</div>
          </td>
        </tr>
      </table>
    </div>

    <!-- Body -->
    <div style="padding: 30px;">
      <div style="border-left: 3px solid #00ffff; padding-left: 15px; margin-bottom: 30px;">
        <h2 style="margin: 0 0 5px 0; font-size: 18px; color: #ffffff;">TRANSMISSION RECEIVED</h2>
        <p style="margin: 0; font-size: 13px; color: #888;">Order Reference: <span style="color: #e0a3ff; font-weight: bold;">#${orderId}</span></p>
      </div>

      <!-- Asset Grid -->
      <div style="background-color: #0f0f1a; border-radius: 4px; padding: 15px; margin-bottom: 30px; border: 1px solid #1a1a2b;">
        <div style="font-size: 11px; color: #444; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 15px; font-weight: bold;">[ ALLOCATED ASSETS ]</div>
        ${itemsHtml}
      </div>

      <!-- Summary -->
      <table style="width: 100%; color: #888; font-size: 13px; margin-bottom: 30px;">
        <tr>
          <td style="padding: 5px 0;">Base Allocation Credits</td>
          <td style="text-align: right; color: #ffffff;">${total}</td>
        </tr>
        <tr>
          <td style="padding: 5px 0;">Encryption Protocols</td>
          <td style="text-align: right; color: #00ffff;">ACTIVE (0.00)</td>
        </tr>
        <tr>
          <td colspan="2" style="border-top: 1px solid #222; padding-top: 10px; margin-top: 10px;"></td>
        </tr>
        <tr>
          <td style="color: #e0a3ff; font-weight: bold; font-size: 14px;">TOTAL SETTLEMENT</td>
          <td style="text-align: right; color: #ffffff; font-size: 20px; font-weight: 900;">${total}</td>
        </tr>
      </table>

      <!-- Tech Message -->
      <div style="background-color: #050505; border: 1px dashed #333; padding: 15px; font-family: monospace; font-size: 11px; color: #666;">
        > SESSION_OWNER: ${userEmail.toUpperCase()}<br>
        > HASH_INTEGRITY: [ SIGNED_SUCCESS ]<br>
        > ENCRYPTION_LEVEL: AES-256-GCM<br>
        > ACTION: DIGITAL_ASSET_DISPATCHED
      </div>
    </div>

    <!-- Footer -->
    </div>
  </div>
</div>`;
}

/**
 * Automatically sends copies of the receipt to both the user and the company.
 * Supports attaching the Cyber-HUD PDF manifest with a fallback for size limits.
 */
async function sendReceiptNotifications(format, pdfBase64 = null) {
    if (typeof emailjs === 'undefined') {
        console.error('shop.js: EmailJS library missing.');
        return;
    }

    const adminEmail = 'aruneshfreefire@gmail.com';
    let userEmail = sessionStorage.getItem('userEmail');
    
    if (!userEmail) {
        const emailField = document.getElementById('customer-email');
        if (emailField && emailField.value) userEmail = emailField.value;
    }

    if (!userEmail) {
        window.showToast('No dispatch address found. Email aborted.', 'error');
        return;
    }

    const orderId = `AM-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    const htmlContent = getReceiptHtml(orderId);

    const baseParams = {
        order_id: orderId,
        format: format.toUpperCase(),
        receipt_content: htmlContent,
        date: new Date().toLocaleString(),
        total: formatPrice(calculateCartTotal()),
        receipt_pdf: pdfBase64 
    };

    const attemptSend = async (to, targetParams, type) => {
        const payload = {
            to: to,
            subject: `Manisha-A: Digital Manifest (${targetParams.format})`,
            html: targetParams.receipt_content,
            from_name: 'Manisha-A Shop'
        };

        // Add PDF attachment if it exists
        if (targetParams.receipt_pdf) {
            payload.attachments = [
                {
                    filename: `AM_MANIFEST_${targetParams.order_id}.pdf`,
                    path: targetParams.receipt_pdf // This is a datauristring
                }
            ];
        }

        try {
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await response.json();
            
            if (result.success) {
                console.log(`shop.js: ${type} transmission successful.`);
                if (type === 'Customer') window.showToast('Digital manifest transmitted to your inbox.', 'success');
            } else {
                throw new Error(result.error || 'Backend transmission failed');
            }
        } catch (err) {
            console.error(`shop.js: ${type} link failed`, err);
            
            // If failed with attachment, try once without it (common for size limits)
            if (payload.attachments) {
                console.log(`shop.js: Retrying ${type} transmission without heavy attachments...`);
                const fallbackPayload = { ...payload, attachments: null, subject: `${payload.subject} (TEXT_ONLY)` };
                try {
                    await fetch('http://localhost:3000/send-email', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(fallbackPayload)
                    });
                    if (type === 'Customer') window.showToast('Manifest sent via HTML (PDF exceeded limit).', 'info');
                } catch (retryErr) {
                    if (type === 'Customer') window.showToast('Transmission signal lost. Check portal settings.', 'error');
                }
            } else {
                if (type === 'Customer') window.showToast('Transmission signal lost.', 'error');
            }
        }
    };

    // Parallel dispatch
    attemptSend(userEmail, baseParams, 'Customer');
    attemptSend(adminEmail, baseParams, 'Archive');
}


/**
 * Checks if the user is logged into the portal before allowing downloads.
 */
function checkVerification() {
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        alert('Universal portal login required. Redirecting to verification center.');
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

/**
 * Displays a premium "Thank You" popup to the user.
 */
function showThankYouPopup() {
    // Check if one already exists
    if (document.querySelector('.thank-you-overlay')) return;

    const overlay = document.createElement('div');
    overlay.className = 'thank-you-overlay';
    overlay.innerHTML = `
        <div class="thank-you-modal glass">
            <div class="thank-you-icon">
                <span style="display: block; transform: scale(1.2);">✓</span>
            </div>
            <h2>ORDER PROCESSED</h2>
            <p>Your AM-COMPANY receipt has been generated successfully. A digital transmission is being sent to your system links.</p>
            <button class="thank-you-close-btn" id="close-thank-you-btn">Proceed to Command Center</button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Animate in
    setTimeout(() => overlay.classList.add('active'), 10);
    
    // Close handler
    const closeBtn = overlay.querySelector('#close-thank-you-btn');
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 400);
    });
}

async function generatePdfReceipt() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add items before downloading a receipt.');
        return;
    }
    
    if (!checkVerification()) return;
    showThankYouPopup();

    if (!window.jspdf || !window.jspdf.jsPDF) {
        alert('PDF generation library not loaded.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const getBarcodeDataURL = (text) => {
        const canvas = document.createElement('canvas');
        try {
            JsBarcode(canvas, text, {
                format: "CODE128",
                width: 2,
                height: 40,
                displayValue: false,
                background: "#00000000",
                lineColor: "#ffffff" // White barcodes for dark theme
            });
            return canvas.toDataURL('image/png');
        } catch (e) { return null; }
    };

    // --- CYBER-HUD ULTRA STYLING (DARK MODE) ---
    
    // 1. Full Page Dark Canvas
    doc.setFillColor(5, 5, 8);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // 2. Sophisticated Circuitry Overlay (Geometric patterns)
    doc.setDrawColor(30, 30, 45);
    doc.setLineWidth(0.1);
    for(let i=0; i<pageWidth; i+=20) {
        doc.line(i, 0, i, pageHeight);
        doc.line(0, i*1.4, pageWidth, i*1.4);
    }
    
    // 3. Glowing Cyber Borders
    doc.setDrawColor(224, 163, 255);
    doc.setLineWidth(1.5);
    doc.line(10, 10, 50, 10); // Corner top-left
    doc.line(10, 10, 10, 40);
    
    doc.setDrawColor(0, 255, 255);
    doc.line(pageWidth-10, pageHeight-10, pageWidth-50, pageHeight-10); // Corner bottom-right
    doc.line(pageWidth-10, pageHeight-10, pageWidth-10, pageHeight-40);

    // 4. Header: AM-COMPANY LOGO HUB
    // Outer Ring
    doc.setDrawColor(224, 163, 255);
    doc.setLineWidth(0.5);
    doc.circle(35, 35, 18, 'S');
    doc.setDrawColor(0, 255, 255);
    doc.circle(35, 35, 15, 'S');
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255);
    doc.text('AM', 35, 38, { align: 'center' });
    
    // Title Section
    doc.setFontSize(36);
    doc.setTextColor(255, 255, 255);
    doc.text('MANISHA-A', 60, 32);
    doc.setFontSize(14);
    doc.setTextColor(255, 105, 180);
    doc.text('D I G I T A L   A S S E T   T R A N S M I S S I O N', 60, 42);

    // SYSTEM STATUS HUD (Right side)
    doc.setFillColor(20, 20, 35);
    doc.rect(pageWidth - 75, 15, 65, 35, 'F');
    doc.setDrawColor(0, 255, 255);
    doc.rect(pageWidth - 75, 15, 65, 35, 'S');
    
    doc.setFontSize(8);
    doc.setTextColor(0, 255, 255);
    doc.text('SYSTEM_LOG_v5.02', pageWidth - 70, 23);
    doc.setTextColor(255, 255, 255);
    doc.text(`ID: ${Math.random().toString(36).substring(7).toUpperCase()}`, pageWidth - 70, 28);
    doc.text(`IP: 192.168.${Math.floor(Math.random()*255)}.1`, pageWidth - 70, 33);
    doc.setTextColor(0, 255, 136);
    doc.text('SECURE_CONNECTION: ACTIVE', pageWidth - 70, 38);
    doc.setTextColor(255, 105, 180);
    doc.text('ENCRYPTION: AES_256_GCM', pageWidth - 70, 43);

    // 5. Transmission Body
    let yPos = 80;
    const margin = 20;
    const col1 = margin + 5; // Asset Name
    const col2 = 145;       // Quantity Center
    const col3 = 190;       // Total Credits Right

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('MANIFEST DATA', margin, yPos);
    
    // Horizontal Glow Line
    doc.setFillColor(224, 163, 255);
    doc.rect(margin, yPos + 4, 170, 1, 'F');

    yPos += 20;
    doc.setFontSize(10);
    doc.setTextColor(180, 180, 200);
    const userEmail = sessionStorage.getItem('userEmail') || "GUEST_LINK";
    doc.text(`AUTHORIZED_RECIPIENT: ${userEmail.toUpperCase()}`, margin, yPos);
    doc.text(`TIMESTAMP: ${new Date().toLocaleString().toUpperCase()}`, col3, yPos, { align: 'right' });
    
    yPos += 15;

    // 6. CYBER GRID TABLE
    // Header
    doc.setFillColor(30, 30, 50);
    doc.rect(margin, yPos, pageWidth - (margin * 2), 15, 'F');
    doc.setDrawColor(224, 163, 255);
    doc.line(margin, yPos, margin, yPos + 15);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(0, 255, 255);
    doc.text('COMPONENT_INDEX', col1, yPos + 10);
    doc.text('QUANTITY', col2, yPos + 10, { align: 'center' });
    doc.text('VALUE_CREDITS', col3, yPos + 10, { align: 'right' });
    
    yPos += 22;

    // 7. Dynamic Asset Rendering
    doc.setFont("helvetica", "normal");
    cart.forEach((item, index) => {
        // Row Background
        doc.setFillColor(15, 15, 25);
        doc.rect(margin, yPos - 8, pageWidth - (margin * 2), 18, 'F');
        
        // Asset Name
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(11);
        let displayName = item.name.toUpperCase();
        // Truncate to avoid overlapping the quantity column
        if (displayName.length > 35) displayName = displayName.substring(0, 32) + "...";
        doc.text(displayName, col1, yPos + 3);
        
        // Metadata
        doc.setFontSize(7);
        doc.setTextColor(100, 100, 120);
        doc.text(`SR-NO: AM-TR-00${index+1}-${item.id.toUpperCase()}`, col1, yPos + 7);

        // Quantity & Price (strictly aligned to centers/right)
        doc.setFontSize(11);
        doc.setTextColor(255, 255, 255);
        doc.text(item.quantity.toString().padStart(2, '0'), col2, yPos + 3, { align: 'center' });
        doc.setTextColor(255, 105, 180);
        doc.text(formatPrice(item.price * item.quantity), col3, yPos + 3, { align: 'right' });
        
        // Futuristic Barcode (Moved to centered-right to avoid name overlap)
        const barcodeImg = getBarcodeDataURL(`AID-${item.id}`);
        if (barcodeImg) {
            doc.addImage(barcodeImg, 'PNG', 110, yPos - 2, 18, 5);
        }
        
        yPos += 20;

        if (yPos > 240) {
            doc.addPage();
            doc.setFillColor(5, 5, 8);
            doc.rect(0, 0, pageWidth, pageHeight, 'F');
            yPos = 30;
        }
    });

    // 8. FINAL SETTLEMENT HUD
    yPos += 10;
    const total = calculateCartTotal();
    
    // Total Box
    doc.setFillColor(20, 20, 40);
    doc.rect(pageWidth - 95, yPos, 75, 25, 'F');
    doc.setDrawColor(0, 255, 255);
    doc.rect(pageWidth - 95, yPos, 75, 25, 'S');
    
    doc.setFontSize(10);
    doc.setTextColor(0, 255, 255);
    doc.text('TOTAL_ASSET_VALUE:', pageWidth - 90, yPos + 10);
    
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    doc.text(formatPrice(total), col3, yPos + 20, { align: 'right' });

    // 9. Digital Signature & Verification QR
    yPos = 245;
    
    // Futuristic Seal
    doc.setDrawColor(255, 105, 180);
    doc.circle(margin + 20, yPos + 20, 15, 'S');
    doc.setFontSize(6);
    doc.setTextColor(255, 105, 180);
    doc.text('OFFICIAL_SYSTEM_SEAL', margin + 20, yPos + 20, { align: 'center' });
    
    // QR Code
    const qrCodeData = `AM-HUB|TRANS-${Date.now()}|${total}`;
    const qrDiv = document.createElement('div');
    new QRCode(qrDiv, { text: qrCodeData, width: 100, height: 100 });
    
    setTimeout(() => {
        const canvas = qrDiv.querySelector('canvas');
        if (canvas) {
            const qrImg = canvas.toDataURL('image/png');
            doc.setDrawColor(0, 255, 255);
            doc.rect(col3 - 32, yPos + 4, 32, 32, 'S');
            doc.addImage(qrImg, 'PNG', col3 - 31, yPos + 5, 30, 30);
        }
        // Final Tech Footer
        doc.setFontSize(8);
        doc.setTextColor(80, 80, 100);
        doc.text('ALL DIGITAL TRANSMISSIONS ARE ENCRYPTED AND LOGGED AT AM-CORE-CENTRAL.', margin, 285);
        doc.text('© 2026 MANISHA-A COMPANY | ADVANCED TECHNOLOGY DIVISION', margin, 290);
        
        // Export PDF as Base64 for EmailJS
        const pdfBase64 = doc.output('datauristring');
        
        sendReceiptNotifications('pdf', pdfBase64);
        doc.save(`AM_CORE_MANIFEST_${Date.now()}.pdf`);
    }, 300);
}

function generateTextReceipt() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    if (!checkVerification()) return;

    showThankYouPopup();

    const receiptText = getReceiptText();
    sendReceiptNotifications('html'); 
    downloadBlob(receiptText, 'receipt.txt', 'text/plain');
}

function generateCsvReceipt() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    if (!checkVerification()) return;

    showThankYouPopup();

    let csvContent = "Item Name,Quantity,Unit Price,Total Price\n";
    cart.forEach(item => {
        csvContent += `"${item.name}",${item.quantity},${item.price},${item.price * item.quantity}\n`;
    });
    csvContent += `\nGRAND TOTAL,,,${calculateCartTotal()}\n`;

    sendReceiptNotifications('html');
    downloadBlob(csvContent, 'receipt.csv', 'text/csv');
}

function downloadBlob(content, filename, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    
    // Auto-fill verified email from portal login
    const savedEmail = sessionStorage.getItem('userEmail');
    const emailField = document.getElementById('customer-email');
    if (savedEmail && emailField) {
        emailField.value = savedEmail;
    }
    loadCart();
    renderProducts();
    updateCartDisplay();
});