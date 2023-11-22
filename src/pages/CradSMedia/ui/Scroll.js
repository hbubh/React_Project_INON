const scroll = () => {
  const scrollY = window.scrollY; // המיקום הנוכחי של הגלילה
  const windowHeight = window.innerHeight; // גובה החלון המוצג
  const documentHeight = document.documentElement.scrollHeight; // גובה המסמך שלך

  // בדיקה אם המשתמש הגיע לתחתית הדף
  return scrollY + windowHeight >= documentHeight;
};
export default scroll;
