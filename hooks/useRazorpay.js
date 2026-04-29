import { useEffect, useState } from 'react';

export default function useRazorpay() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
    
        if (document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
            setLoaded(true);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => setLoaded(true);
        script.onerror = () => {
            console.error('Failed to load Razorpay script');
            setLoaded(false);
        };
        
        document.body.appendChild(script);

        return () => {
           
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return loaded;
}