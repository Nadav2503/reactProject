כדי שהקובץ יעבוד מימין לשמאל יש ללחוץ בתוך קובץ ה-(Ctrl+right Shift) readme.txt 

//--------------------------------------------------------------------

שלום לכולם,
כאן אציג לכן את משמעות הפרויקט והערות חשובות.
אכתוב מה המשמעות של כל קובץ.

//--------------------------------------------------------------------

הערות חשובות:
1) הכרטיסים מייצגים עסקים אבל כמובן השרת הוא שרת דמה של מכללת האקר יו - HackerU
לכן כל הכרטיסים נוספו לאתר על ידי סטודנטים של האקר יו
לכן חלק מהכטיסים עם פרטים לא נכונים שלא קיימים במציאות כמו מדינות עם מספרים או מספרי טלפון שגויים וכדומה
2) חסימת המשתמש לא אפשרית לביצוע כי אין איך לעבוד עם צד שרת,
לכן החסימה היא רק ויזואלית לאחר שלושה ניסיונות התחברות שגויים
חשוב!!! החסימה היא ל - 24 שעות לכן עדיף לבצע זאת רק עם משתמש לא חשוב שלא תשתמשו בו אחר כך
3)הלוגו ושמו בדויים כמו גם "שם החברה" בעמוד אודות הכוונה בלוגו זה האייקון הוא תמונה מהאינטרנט 
והשם הוא מומצא ובעצם שם הפרויקט BCard שזה בעצם business card
4)הפרוייקט נוצר בעזרת react עם ספריית העיצוב MUI
5)הפרוייקט לא יכול להעלות כאתר דמה בעזרת github לכן הנה איך מתקינים את הפרוייקט

//--------------------------------------------------------------------

?איך להתקין את הפרוייקט
1)התקינו את התוכנה visual studio code
2)קחו את תיקיית cards project מגיטאהב ושימו אותה ב - visual studio code in as a folder
3)פתחו את הטרמינל וודאו שאתם נמצאים בתיקיית הפרויקט, חשוב אחרת האתר לא יעבוד, ודאו שאתם ב correct path
אם אתם לא בpath הנכון רשמו את הפקודה cd ואת התיקייה של הפרויקט לדוגמה:
PS C:\Users\owner\Desktop\nadav\studies\מבחנים\קורסמורחב\reactProject>
לא path נכון לכן נוסיף cd cards project
4)לאחר מכן רשמו את הפעולות הבאות בסדר הבא:
npm create vite@latest .
npm install
npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto
npm install @mui/icons-material
npm run dev
הנקודה בפעולה הראשונה מוודאת שהכל מותקן בתיקייה הנכונה
5)לחצו על הקישור שנוצר בטרמינל בעזרת ctrl + קליק שמאלי בעכבר

//--------------------------------------------------------------------

מבנה הפרויקט

|- cards
-- |- components
------ |- card
-------------|- CardActionBar.jsx
-------------|- CardBody.jsx
-------------|- CardComponent.jsx
-------------|- CardHeaderComponent.jsx
------ |- AddNewCardButton.jsx
------ |- CardForm.jsx
------ |- Cards.jsx
------ |- CardsFeedback.jsx
-- |- helpers
------ |- initialForms
-------------|- initialCardForm.js
------ |- normalization
-------------|- mapCardToModel.js
-------------|- normalizeCard.js
-- |- hooks
------ |- useCards.js
-- |- models
------ |- cardSchema.js
-- |- pages
------ |- AddCardPage.jsx
------ |- CardDetailsPage.jsx
------ |- CardsPage.jsx
------ |- EditCardPage.jsx
------ |- FavoriteCards.jsx
------ |- MyCards.jsx
-- |- services
------ |- CardApiService.js

|- components
-- |- ConfirmDialog.jsx
-- |- Error.jsx
-- |- PageHeader.jsx
-- |- Spinner.jsx

|- forms
-- |-components
------ |- Form.jsx
------ |- FormButton.jsx
------ |- Input.jsx
-- |- hooks
------ |- useForm.js
-- |- utils
------ |- algoMethods.js

|- hooks
-- |- useAxios.js

|- layout
-- |- footer
------ |- Footer.jsx
-- |-header
------ |- components
-------------|- AnchorComponent.jsx
------ |- hooks
-------------|- useAnchor.js
------ |- left-navigation
-------------|- LeftNavBar.jsx
------ |- logo
-------------|- Logo.jsx
-------------|- LogoIcon.jsx
------ |- middle-naviagtion
-------------|- SearchBar.jsx
------ |- right-navigation
-------------|- Logged.jsx
-------------|- NotLogged.jsx
-------------|- RightNavBar.jsx
------ |- Header.jsx
-- |- main
------ |- Main.jsx
-- |- Layout.jsx

|- pages
-- |- AboutPage.jsx
-- |- ErrorPage.jsx

|- providers
-- |- CustomThemeProvider.jsx
-- |- SnackBarProvider.jsx

|- routes
-- |- components
------ |- NavBarItem.jsx
------ |- NavBarLink.jsx
-- |- Routes.jsx
-- |- routesModel.js

|- users
-- |- components
------ |- SignupForm.jsx
------ |- UserForm.jsx
-- |- helpers
------ |- initialForms
-------------|- initialLoginForm.js
-------------|- initialSignupForm.js
-------------|- initialUserForm.js
------ |- normalization
-------------|- mapUserToModel.js
-------------|- mapUserToModelForUpdate.js
-------------|- normalizeUser.js
-------------|- normalizeUserForUpdate.js
-- |- hooks
------ |- useUsers.js
-- |- models
------ |- loginSchema.js
------ |- signupSchema.js
------ |- userSchema.js
-- |- pages
------ |- EditUserPage.jsx
------ |- LoginPage.jsx
------ |- SignupPage.jsx
------ |- UserProfilePage.jsx
-- |- providers
------ |- UserProvider.jsx
-- |- services
------ |- localStorageService.js
------ |- usersApiService.js

|- App.jsx
|- main.jsx

//--------------------------------------------------------------------

כל תיקייה מרכזית מייצגת יישות בפרוייקט.

cards - כרטיסים
components - קומפוננטות כלליות שרלוונטיות לכל האתר
forms - טפסים
hooks - ההוקים הכללים שרלוונטים לכל האתר
layout - מבנה העמודים באתר
pages - הדפים הכללים שלא שייכים למחלקה מסויימת
providers - עיצוב האתר 
routes - ניווט האתר
users - משתמשים

רוב התיקיות מכילות דברים כללים לאתר למעט תיקיית כרטיסים ותיקיית משתמשים 

//--------------------------------------------------------------------

תיקיית כרטיסים

CardActionBar.jsx - קומפוננטה לאייקונים של הכרטיסם
CardBody.jsx - קומפוננטה לתוכן הכרטיס 
CardComponent.jsx - קומפוננטה למבנה הכרטיס
CardHeaderComponent.jsx - קומפוננטה לכותרת הכרטיס
AddNewCardButton.jsx - קןמפוננטה לכפותר הוספת כרטיס
CardForm.jsx - קומפוננטה לטופס כרטיס בשביל עדכון או הוספה
Cards.jsx - קומפוננטה כללית לסידור הכרטיסים בדף
CardsFeedback.jsx - קומפוננטה למשוב על קבלת הכרטיסים מהשרת
initialCardForm.js - (ערכים ריקים)קוד לערכים התחלתיים בטופס כרטיסים
mapCardToModel.js - המרת האובייקט כרטיס לאיך שהוא נשלח לשרת
normalizeCard.js - המרת האובייקט כרטיס לאיך שהוא מגיע מהשרת
useCards.js - הוק לקבלת תשובה לבקשה מהשרת
cardSchema.js - קוד לולידציה של טופס כרטיס
AddCardPage.jsx - קומפוננטה להוספת כרטיס
CardDetailsPage.jsx - קומפוננטה להצגת פרטי כרטיס ספציפי
CardsPage.jsx - קומפוננטה להצגת כל הכרטיסים בשרת
EditCardPage.jsx - קומפוננטה לעריכת פרטי כרטיס
FavoriteCards.jsx - קומפוננטה להצגת כרטיסים פייבוריטים של משתמש
MyCards.jsx - קומפוננטה להצגת כרטיסים שהמשתמש הוסיף
CardApiService.js - הוק לשליחת בקשות לשרת

//--------------------------------------------------------------------

תיקיית משתמשים

SignupForm.jsx - קומפוננטה למבנה טופס הרשמה
UserForm.jsx - קומפוננטה למבנה טופס עדכון פרטי משתמש
initialLoginForm.js - (ערכים ריקים)קוד לערכים התחלתיים בטופס התחברות
initialSignupForm.js -  (ערכים ריקים)קוד לערכים התחלתיים בטופס הרשמה 
initialUserForm.js - (ערכים ריקים)קוד לערכים התחלתיים בטופס משתמשים
mapUserToModel.js - המרת האובייקט משתמש לאיך שהוא נשלח לשרת
mapUserToModelForUpdate.js - המרת האובייקט משתמש לאיך שהוא נשלח לשרת כדי לעדכן פרטי משתמש
normalizeUser.js - המרת האובייקט משתמש לאיך שהוא מגיע מהשרת
normalizeUserForUpdate.js - המרת האובייקט משתמש לאיך שהוא מגיע מהשרת כדי לקבל פרטי משתמש
useUsers.js - הוק לקבלת תשובות לבקשה מהשרת
loginSchema.js - קוד לולידציה של טופס התחברות
signupSchema.js - קוד לולידציה של טופס הרשמה
userSchema.js - קוד לולידציה של טופס עדכון פרטי משתמש
EditUserPage.jsx - קומפוננטה לעדכון פרטי משתמש
LoginPage.jsx - קומפוננטה להתחברות לאתר
SignupPage.jsx - קומפוננטה להרשמה לאתר
UserProfilePage.jsx - קומפוננטה להצגת פקטי משתמש
UserProvider.jsx - קומפוננטה שמאפשרת למשתמש להיות מחובר 
localStorageService.js - קוד כדי לשמור או לקבל טוקן כדי לודא שהמשתמש יוכל להתקיים במערכת
usersApiService.js - הוק לשליחת בקשות לשרת

//--------------------------------------------------------------------

תיקיית קומפוננטות כלליות

ConfirmDialog.jsx - קומפוננטה לאישור סופי עם המשתמש עושה משהו שאי אפשר לשחזר
Error.jsx - קומפוננטה להצגת שגיאות מהשרת
PageHeader.jsx - קומפוננטה לכותרת העמודים באתר
Spinner.jsx - קומפוננטה לטעינה במקה של זמן תגובה ארוך מהשרת

//--------------------------------------------------------------------

תיקיית טפסים

Form.jsx - קומפוננטה למבנה טפסים
FormButton.jsx - קומפוננטה לכפתור אישור, ביטול או איפוס
Input.jsx - קומפוננטה לערכי הטופס
useForm.js - הוק לולידציה של הטופס
algoMethods.js - קוד להחלפת שם משתמש לאות גדולה עם המשתמש באנגלית

//--------------------------------------------------------------------

תיקיית הוקים כללים

useAxios.js - הוק לאישור בקשות מהשרת דרך AXIOS

//--------------------------------------------------------------------

תיקיית פריסת העמודים באתר

Footer.jsx - קומפוננטה לתחתית האתר
AnchorComponent.jsx - קומפוננטה כללית לתפריט נפתח
useAnchor.js - הוק לביצוע תפרטי נפתח
LeftNavBar.jsx - קומפוננטה לצד שמאל של התפריט
Logo.jsx - קומפוננטה ללוגו האתר
LogoIcon.jsx - קומפוננטה לשם החברה
SearchBar.jsx - קומפוננטה לחיפוש של כרטיס דרך התפריט
Logged.jsx - קומפוננטה לתפריט של מתשמש מחובר
NotLogged.jsx - קומפוננטה לתפריט של משתמש לא מחובר
RightNavBar.jsx - קומפוננטה לצד ימין של התפריט
Header.jsx - קומפוננטה לראש האתר
Main.jsx - קומפוננטה לתוכן האתר
Layout.jsx - קומפוננטה לעימוד העמודים האתר(ראש, תוכן, תחתית)

//--------------------------------------------------------------------

תיקיית עמודים כללים

AboutPage.jsx - קומפוננטה לעמוד אודות
ErrorPage.jsx - קומפוננטה לעמוד שגיאה עם עמוד לא קיים באתר

//--------------------------------------------------------------------

תיקיית עיצוב האתר

CustomThemeProvider.jsx - קומפוננטה לעיצוב האתר
SnackBarProvider.jsx - קומפוננטה להצגת הודעת השגיאה

//--------------------------------------------------------------------

תיקיית ניווט האתר

NavBarItem.jsx - קומפוננטה לעיצוב קטגוריה בתפריט
NavBarLink.jsx - קומפוננטה לניווט קטגוריה מהתפריט
Router.jsx - קומפוננטה לכתובת הדף אליו רוצים להגיע
routesModel.js - קוד לקיצור כתובות האתר

//--------------------------------------------------------------------

אתחול האתר

App.jsx - קומפוננטה ראשית שמכילה את כל היישויות באתר
main.jsx - אתחול האתר

//--------------------------------------------------------------------