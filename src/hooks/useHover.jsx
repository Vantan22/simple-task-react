import { useState, useRef, useEffect } from 'react';

const useHover = () => {
const [isHovered, setIsHovered] = useState(false);
const ref = useRef(null);

useEffect(() => {
const handleMouseOver = () => setIsHovered(true);
const handleMouseOut = () => setIsHovered(false);

const node = ref.current;
if (node) {
node.addEventListener('mouseover', handleMouseOver);
node.addEventListener('mouseout', handleMouseOut);

// Cleanup event listeners on component unmount
return () => {
node.removeEventListener('mouseover', handleMouseOver);
node.removeEventListener('mouseout', handleMouseOut);
};
}
}, [ref]);

return [ref, isHovered];
};

export default useHover;
