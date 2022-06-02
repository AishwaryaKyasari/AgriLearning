// import React from 'react';
// import { useEffect } from 'react';
// function loadGoogleTranslate(){
//     new google.translate.TranslateElement("google_element");
//     }
// function Translator(){

//     return(
//         <script src = "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate">
//             loadGoogleTranslate();
//         </script>
        
//     );
// }
// export default Translator;


import React from 'react';
//import { useEffect } from 'react';
// function loadGoogleTranslate(){
//     new google.translate.TranslateElement("google_element");
//     }
function Translator(){

    return(
        <script src = "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate">
            {/* loadGoogleTranslate(); */}
        </script>
        
    );
}
export default Translator;