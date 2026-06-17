
interface Props {
    size?: number
}
const LesilingoLogo = ({ size = 35 }: Props) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* الجزء العلوي الأيسر - أزرق */}
      <path 
        d="M 45 5 A 40 40 0 0 0 5 45 L 45 45 Z" 
        fill="#2A9D8F" 
      />
      {/* الجزء العلوي الأيمن - أخضر */}
      <path 
        d="M 55 45 L 95 45 A 40 40 0 0 0 55 5 Z" 
        fill="#4EA8DE" 
        
      />
      {/* الجزء السفلي الأيمن - برتقالي */}
      <path 
        d="M 55 55 L 55 95 A 40 40 0 0 0 95 55 Z" 
        fill="#F4A261" 
      />
      {/* الجزء السفلي الأيسر - أحمر/بني */}
      <path 
        d="M 5 55 A 40 40 0 0 0 45 95 L 45 55 Z" 
        fill="#E76F51" 
      />
    </svg>
  );
};

export default LesilingoLogo;