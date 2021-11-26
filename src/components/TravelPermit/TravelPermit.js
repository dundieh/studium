import React from "react";
import one from './pics/one.jpeg';
import two from './pics/two.jpeg';
import three from './pics/three.jpeg';
import four from './pics/four.jpeg';
import five from './pics/five.jpeg';
import './TravelPermit.css';

class TravelPermit extends React.Component {
    render() {
        return (
            <article className="article br3 ba b--black-10 w-100 w-50-m w-50-l mw7 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <div className='legend center'>
                                <legend className="f1 fw6 ph0 mh0">تصريح السفر والبعثات وتأجيل الجيش</legend>
                            </div>
                            <hr/>

                            <div className="ui form ma0">
                                <div className="fields"> 
                                    <div class="row">
                                        <div class="column">
                                            <img alt='' width='250px' height='300px' src={one} />
                                            <img alt='' width='250px' height='300px' src={two} />
                                        </div>
                                        <div class="column">
                                            <img alt='' width='250px' height='300px' src={three} />
                                            <img alt='' width='250px' height='300px'src={four} />
                                        </div>
                                        <div class="column">
                                            <img alt='' width='500px' height='500px'src={five} />
                                        </div>
                                    </div>
                                    <hr/>
                                    <h3>        
                                        البوست دة عن استخراج تصريح السفر من الجيش و تأجيل الجيش للشباب اللى عليهم جيش و عايزين يسافروا يكملوا دراستهم خارج مصر
                                        <br/>
                                        البوست دة مش موجه للبنات او اى حد مش عليه جيش
                                        <br/>
                                        - المعروف ان اى شخص فى مصر عليه جيش وعايز يسافر من مصر فلازم يستخرج تصريح السفر من منطقة التجنيد فى منطقته او حلمية الزيتون فى القاهرة
                                        <br/>
                                        - و ان اى طالب بكالوريوس عليه جيش و بيدرس فى مصر فممنوع يسافر خارج مصر اثناء سيرالدراسة فى مصرو مسموح له فقط ان هو يسافر فى اجازة نص السنة او اخر السنة و هيسافر بتصريح سفر سياحة.
                                        <br/>
                                        .........................................
                                        <br/>
                                        = اولا - هتكلم عن تصريح سفر السياحة .
                                        <br/>
                                        التصريح دة بيبقا للطلاب بس بيبقا فى فى فترة لاجازة و دى اللى بيحددها جامعتك لان الجامعة بتبلغ منطقة التجنيد ب فترة الاجازة فالجامعة فى نص السنة و اخرها .. يعنى لازم تسأل الجامعة على مواعيد الاجازة و غير مسموح لاى طالب فى السنة الدراسية الاخيرة ان هو يسافر بتصريح السياحة اذا كان فى نص السنة او اخر السنة
                                        <br/>
                                        ازاى تستخرج تصريح سفر السياحة ؟
                                        <br/>
                                        هتروح تطلع اثبات قيد من الجامعة اللى انت فيها موجهة لمنطقة التجنيد وتسأل موظف جامعتك هل فيه اختام مطلوبة تانى ولا لا .و هتاخد اثبات القيد لمنطقة التجنيد اللى انت تابع ليها او فى حلمية الزيتون فى القاهرة و تطلع تصريح السفرالسياحة فى نفس اليوم
                                        <br/>
                                        مدة تصريح السفر للسياحة ؟
                                        <br/>
                                        المدة بتبقا غالبا لحد نهاية الاجازة بس ممكن تاخدها اسبوعين من استخراجها او تلاتة او شهر او اكتر و دة بيتحدد على حسب الاجازة هتخلص امتى
                                        <br/>
                                        عيوب تصريح سفر السياحة ؟
                                        <br/>
                                        اة له عيوب طبعا لان مسموح فقط ب ايام الاجازة .. يعنى لو سافرت المانيا او اى دولة و فجأة عايز تنزل مصر ف عشان تخرج من مصر تانى فلازم يبقا فى الاجازة " نص السنة او اخر السنة للسنة الدراسية فى مصر " وهتعيد نفس الخطوات اللى فوق تانى عشان تستخرج التصريح
                                        <br/>
                                        - لو طالب و معاه فيزا دراسة و عايز يسافر بتصريح السياحة فعادى مفيهاش اى مشكلة و صحابنا عدوا من ظابط الجوازات فى المطار بالتصريح دة و مفيش اى مشاكل خالص
                                        <br/>
                                        ...................................
                                        <br/>
                                        = طب لو الطالب جاتله الفيزا و عايز يسافر اثناء الدراسة ف ايه هى الحلول للطلاب غير تصريح سفر السياحة؟
                                        <br/>
                                        وزارة الدفاع محددة شروط للطلاب للسماح ليهم بالسفر اثناء سير الدراسة فى مصر و الشروط كالاتى
                                        <br/>
                                        1- لو حد من والديك خارج مصر و معاهم اقامة فممكن تسافرلهم لو بعتولك دعوة " صحبى عملها و انا اللى قولتله عليها و سافر للامارات و من هناك ل المانيا "
                                        <br/>
                                        2- لو حد من والديك توفى فممكن تسافرللبلد اللى هو فيها اثناء الدراسة
                                        <br/>
                                        3- لو هتسافر السعودية للعمرة او الحج
                                        <br/>
                                        4- تمثيل مصر فى المهرجاانات او المسابقات ..
                                        <br/>
                                        5- ان الطالب يكون متسجل فى ادارة البعثات و دة اللى هتكلم عنه بالتفصيل
                                        <br/>
                                        .............................
                                        <br/>
                                        <br/>
                                        = التسجيل فى ادارة البعثات =
                                        <br/>
                                        ادارة البعثات هى منظمة مقرها فى مجمع التحرير-الدور السابع فى القاهرة و تابعة لوزارة التعليم العالى فى مصر و مهام الادارة ان هى بتسجل الطلاب اللى عايزين يسافروا يكملوا دراستهم خارج مصر لتأجيل الجيش ليهم لا اكثر ولا اقل
                                        <br/>
                                        "" من 12-2019
                                        <br/>
                                        تم تغيير عنوان الاداراة ل حى السفارات - مدينة نصر - القاهرة .. العنوان بالتفصيل مرفق فالصور
                                        <br/>
                                        - فوايد التسجيل فى ادارة البعثات ؟
                                        <br/>
                                        ان الطالب يقدر يسافر خارج مصر و ينزل مصر فى اى وقت مادام متسجل فى الادارة
                                        <br/>
                                        - عيوب التسجيل فى الادارة ؟
                                        <br/>
                                        ان الادارة بتطلب من اى طالب بكالوريوس او تحضيرية ان هو يسحب ورقه من الجامعة فى مصر لو هو متسجل فيها مادام هتدرس خارج مصر و تسجل فى الادارة
                                        <br/>
                                        " اوقات بيعدوها و اوقات لا "
                                        <br/>
                                        - هل فيه شروط للتسجيل فى ادارة البعثات ؟
                                        <br/>
                                        اة فيه شروط و بيطلبوا ورق للتسجيل فى الادارة و مرفقة بالبوست بالصور
                                        <br/>
                                        .......................................
                                        <br/>
                                        = بس فيه كذة نقطة لازم الناس تكون عارفاها و هى بتسجل.
                                        <br/>
                                        ......................................
                                        <br/>
                                        - مينفعش حد يجيب قبول من معهد لغة و يروحلهم يقولهم عايز اسجل فالبعثات .. لازم يبقا معاك قبول جامعة مشروط او نهائى
                                        <br/>
                                        - طالب السنة التحضيرية او البكالوريوس و سنه اقل من 22 سنة ف يقدر يسجل فى البعثات مادام اقل من 22 سنة
                                        <br/>
                                        - طالب البكالوريوس وسنه فوق 22 سنة
                                        <br/>
                                        لازم عشان تسجل فى ادارة البعثات فلازم تجيب قبول ترم عالى للتخصص اللى انت بتدرسه فى مصر ومش هتبدأ من الاول عكس اللى اقل من 22
                                        <br/>
                                        <br/>
                                        و دى بتجيب اثبات من الجامعة اللى هتقدم عليها فى المانيا انك عادلت مواد من اللى درستها فى مصر ومش هتبدأ من الاول و دة يعنى هتقدم على ترم عالى و هتعمل معادلة
                                        <br/>
                                        و <a href='https://www.facebook.com/groups/311111149267612/permalink/453776905001035/'>البوست</a> دة بيتكلم عن المعادلة- طالب الماستر.
                                        <br/>
                                        لازم تجيب قبول ماستر و تسجل فى البعثات بعد ما تخلص
                                        <br/>
                                        بس فيه مشكلة بتواجه طلاب الماستر .. وهى ان الترم فى مصر بيخلص فى شهر 7 او 8 و بيبقا فيه طلاب الجيش بتاعها فى اكتوبر
                                        <br/>
                                        و ان التقديم للترم الشتوى فى المانيا بيخلص فى نص سبعة
                                        <br/>
                                        ف فيه حل و اكتر من واحد عمله و هو ان الطالب بيراسل الجامعات بعد اول ترم فى اخر سنة و بيقولهم ان التقديم بيخلص فى نص سبعة و ان النتيجة النهائية فى مصر بتظهر فى اغسطس و ان لما يوصل المانيا فهيسلم درجات اخر ترم و شهادة التخرج ف فيه جامعات بترفض وجامعات بتوافق و بتبعتلك القبول لو محقق شروطها و السفارة مش هتعترض ع القبول دة.. وطبعا بتدخل السفارة و بتسجل فى البعثات بعد ما تخلص الترم و يكون معاك الشهادة
                                        <br/>
                                        - طب فيه مشكلة لو طالب الماستر معرفش يجيب قبول وسقط دفعة فالجيش و سجل فى البعثات وقدم على الترم اللى بعده؟
                                        <br/>
                                        اكتر من زميل نعرفه سأل فى البعثات و كان الرد عادى مفيهاش حاجة " و اتأكد أفضل من البعثات "
                                        <br/>
                                        - لو انت سجلت فى البعثات و انت اقل من 22 سنة بقبول عادى
                                        <br/>
                                        وسافرت المانيا و كملت ال 22
                                        <br/>
                                        فعشان تجدد تصريح السفر فلازم تثبت للبعثات انك مش فى الترم الاول فلازم تجبلهم اثبات انك مش فى الترم الاول و خلصت على الاقل ترم و متسجل فى الترم التانى او اكتر او عادلت مواد
                                        <br/>
                                        - لو طالب بكالوريوس فالبعثات هتأجلك الجيش لحد 28 سنة
                                        <br/>
                                        لو خلصت قبل 28 سنة
                                        <br/>
                                        ف تجدد التسجيل ب قبول ماستر او تنزل تقضى جيشك
                                        <br/>
                                        يا اما تخليك برا مصر لحد ما تكمل سن ال 30 و تنزل تتصالح مع الجيش و تدفع غرامة و التجنيد يبقا ملغى
                                        <br/>
                                        - طالب الماستر او الدكتوراة هيتأجلك لحد 29 سنة و عشان تقدم على البعثات فلازم سنك ميزيدش عن 26 او 27 سنة وقت التقديم
                                        <br/>
                                        " الافضل تسأل فى البعثات عن السن "
                                        <br/>
                                        ولو خلصت قبل 29 ونزلت فهتدخل الجيش يا اما تخليك برا لحد
                                        <br/>
                                        سن ال 30
                                        <br/>
                                        - تصريح السفر اللى بتاخده من الجيش و انت متسجل فى البعثات فنهايته 30/8
                                        <br/>
                                        من كل سنة و بيبقا متعدد السفريات وتقدر تنزل و تسافر من غير ما تمشى فى اى خطوة مادام التصريح سارى بس وانت مسافر ف صور التصريح و سلم صورة منه لظابط المطار والاصل يكون معاك
                                        <br/>
                                        بس لو التاريخ خلص فبتضطر تجدد التصريح تانى و دة بيحتاج منك ان انت ترجع لادارة البعثات و تاخد منهم زى اثبات قيد ان انت لسا مسجل عندهم للعام الدراسى الجديد و البعثات بتطلب منك اثبات ان انت متسجل فالجامعة فى المانيا او قبول الجامعة للعام الدراسى الجديد والاثبات دة بيبقا مختوم من المكثب الثقافى المصرى فى برلين
                                        <br/>
                                        او مختوم من ا- مؤمن فى اكاديمية البحث العلمى فى القاهرة
                                        <br/>
                                        - تقدر تسافر ب تصريح سياحة ولما تيجى المانيا فتمشى فى اجراءات التسجيل فى البعثات عادى و هتبقا هى هى نفس الشروط
                                        <br/>
                                        - مش لازم تكون انت شخصيا تمشى فى اجراءات التسجيل فى البعثات " ممكن والدك / اخوك / والدتك / اختك "
                                        <br/>
                                        اما تصريح السفر من التجنيد ف ممكن يطلبوا تكون انت الموجود
                                        <br/>
                                        - ممكن تسافر على جامعة وتكون مسجل بيها فى البعثات و لما توصل المانيا ف تغير الجامعة عادى بس ممنوع بعد سن ال 22
                                        <br/>
                                        ......................................................
                                        <br/>
                                        = تجربيتى الشخصية للتسجيل فى ادارة البعثات =
                                        <br/>
                                        .......................................................
                                        <br/>
                                        - اول حاجة لازم تعرف ايه الورق المطلوب من ادارة البعثات للتسجيل فيها
                                        <br/>
                                        و تعتبر اكتر ورقتين مهمتين للتسجيل و بتاخد وقت عشان تطلعها و هى الموافقة الامنية و التأكد من صحة القبول
                                        <br/>
                                        = اولا - الموافقة الامنية .
                                        <br/>
                                        و دى ورقة فيما معناه ان انت معندكش قضية و تعتبر تحرى عنك مش اكتر وتقريبا الجهة المختصة هى امن الدولة و المخابرات.
                                        <br/>
                                        - امتى تمشى فى خطوات الموافقة الامنية ؟
                                        <br/>
                                        حاول تمشى فيها بدرى حتى لو قبل مقابلة السفارة لان على الاقل بتاخد من ثلاث اسابيع لستة اسابيع
                                        <br/>
                                        - ازاى تستخرج الموافقة الامنية ؟
                                        <br/>
                                        <br/>
                                        من 11-2019
                                        <br/>
                                        الطريقة اتغيرت و عشان تقدم عليها فلازم تروح لمقر ادارة البعثات وتقدم هناك اما حاليا فالموقع مبيفتحش
                                        <br/>
                                        ................
                                        <br/>
                                        كل اللى عليك هتدخل على <a href='https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.mohe-casm.edu.eg%2FE-services%2FBassat%2FServices%2Funder_supervision_student%2Flogin%2Fchanges_Login.jsp%3Ffbclid%3DIwAR0KnIjVsrjzZohg7thyCzWIcgH2jlZOiC4rvKMzvHYVmiG1CalHws36e-E&h=AT1R_wYaCD-hrYG6yHqeOzto8z7D8IFT1lOZhKa_U_NWgk63bQ8RILE0xdJue1I5os41hNvjM_43dyje_cGyiGJfpSh_lHZ5h710PqAKHpncetq6jyIxpwWZSL27KzdaxOSDpAQb9g&__tn__=-UK-R&c[0]=AT1LVQh3hNIWJwu6j7BiwR8OXppM19Q17ClqSA5I4HKOJPqx7YqT-qao-j8leTbzBYRFDNugMHK6wTd9QUfwKfW6G_1QKsl2aE2o9NGuate_FpDenpOhyEglsilIinuqF_ku61En8vUYi2an5bz_xWxCRN__N74nvMs'>الموقع</a>
                                        <br/>
                                        <br/>
                                        و هتعمل اكونت عليه و هتدخل بياناتك والرقم الثلاثى اللى مكتوب فى شهادة ميلادك و بيطلب منك ترفع 3 اوراق مطلوبين
                                        <br/>
                                        1- اخر شهادة حصلت عليها . مثلا لو هتقدم بكالوريوس او تحضيرية ف ترفع بيان درجات الثانوية اما لو ماستر ف ترفع شهادة التخرج لو دكتوراة ف ترفع شهادة الماستر ومش لازم الشهادة تكون متوثقة خارجية ولا سفارة ولا مترجمة ويكفى العربى فقط
                                        <br/>
                                        2- قبول الجامعة اللى الجامعة بعتته ليك بالايميل مش لازم اصل يعنى ولا متوثق من اى جهة ولا مترجم
                                        <br/>
                                        3- مصدر التمويل " الحساب البنكى او ورقة الضامن او كشف حساب لاى حد من الدرجة الاولى للرابعة من اهلك و مش فارق المبلغ ب انهى عملة بس لازم يكون مبلغ كبير او منحة"
                                        <br/>
                                        هترفع الورق دة وهيظهرلك فى الاخر رقم يفضل تكتبه او تحفظه لانك ممكن تحتاجه بعدين .
                                        <br/>
                                        عموما الورقة دى اهم ورقة لان من غيرها هتبقا متكتف ومش هتعرف تمشى فالخطوات
                                        <br/>
                                        - ازاى تعرف ان الموافقة الامنية ظهرت ؟
                                        <br/>
                                        بعد 3 اسابيع هتروح تسأل فى ادارة البعثات عن اسمك او الرقم اللى ظهرلك بعد ما سجلت على الموقع مكتوب فالكشف ولا لا
                                        <br/>
                                        او تروح وزارة التعليم العالى فى حى السفارات فى مدينة نصر و تسأل على ا- عصام المسئول عن الموافقة الامنية ولو ظهرت فهيقولك بعتناها لادارة البعثات ودة اللى حصل معايا
                                        <br/>
                                        " انا شخصيا ظهرتلى بعد شهر و اسبوع تقريبا و كان معايا اكتر من واسطة من الجيش والشرطة "
                                        <br/>
                                        و لما بتعرف ان هى ظهرت ف بتروح لادارة البعثات و بتاخد رقم و ان دة هو الرقم الخاص بيك للموافقة الامنية
                                        <br/>
                                        تعديل : فبراير 2019
                                        <br/>
                                        الموافقة الامنية هتتبعت على الايميل ولازم الطالب يطبعها وممنوع ان اى حد يسأل عليها فى ادارة البعثات " الصورة فى البوست "
                                        <br/>
                                        ..........
                                        <br/>
                                        = ثانيا - التأكد من صحة القبول .
                                        <br/>
                                        هتطبع القبول " ابيض واسود او الوان " اللى اتبعت من الجامعة على الايميل او تصور الاصل لو معاك
                                        <br/>
                                        و هتاخده و تروح للاستاذ مؤمن فى الدور العاشر "هو معروف هناك" فى اكاديمية البحث العلمى بجوار مجلس الشعب بجوار مجمع التحرير
                                        <br/>
                                        وهتقوله عايزك تختملى على القبول و تتأكد من صحته . فهيقولك طب افتحلى ايميل الجامعة بتاعك و ورينى الورقة دى على الموقع ف احنا طبعا مبيبقاش معانا ايميل جامعة ولا هيعترف بالايميل اللى الجامعة بعتتلك عليه القبول ولا اكونت اليونى اسيست .. فهيقولك استنى 15 يوم و تعالا عشان اتأكد منه.
                                        <br/>
                                        و كل اللى بيعمله ان هو بيبعت ميل للجامعة و بيسألهم القبول دة صح ولا لا و بيطلب منك الايميل بتاعك اللى اتبعت عليه القبول و بعد 15 يوم بتروحله و بتاخد القبول منه و ممضى عليه منه و بتروح بعد كدة تكمل اجراءات التسجيل فى البعثات
                                        <br/>
                                        - حصل معايا شخصيا ان انا قولتله انا مسافر كمان يومين و ان انا اخدت الفيزا و ان اسم الجامعة والمدينة هو هو اللى مكتوب فى التأشيرة و معايا تذكرة الطيران ف قالى خلاص مش هبعت ميل و مضالى علطول لما اتأكد من الكلام اللى قولتله عليه
                                        <br/>
                                        - القبول كان من سنة بيترجم و بيتوثق خارجية و سفارة بس أ- مؤمن حل مكانهم ومبقوش بيعملوا كدة
                                        <br/>
                                        بكدة انت خلاص يعتبر خلصت كل حاجة
                                        <br/>
                                        هتروح بقا لادارة البعثات بالورق المطلوب منك و المسئول عن المانيا هو
                                        <br/>
                                        أ- حامد و دة فعلا من الشخصيات المحترمة جدا
                                        <br/>
                                        الورق المطلوب منك
                                        <br/>
                                        1- قبول الجامعة ممضى من ا- مؤمن
                                        <br/>
                                        " أ- حامد قال ليا فين كلمة المعادلة اللى مكتوبة فى القبول ف ورتهاله و قالى تمام "
                                        <br/>
                                        2- صورة الثانوية
                                        <br/>
                                        3- صورة مصدر التمويل
                                        <br/>
                                        4- صورة شهادة الميلاد
                                        <br/>
                                        5- صورة الباسبور او البطاقة " انا كان معايا فقط الباسبور "
                                        <br/>
                                        6- استمارة 2 جند و بتجيبها من ادارة او قسم التجنيد الخاص بيك
                                        <br/>
                                        " انا كنت تابع للمنصورة لان بطاقتى المنصورة و لما روحت لقسم الازبكية فى رمسيس فقالى لا مينفعش لانك منصورة ف روح مديرية امن القاهرة و روحت جبتها من هناك من غير اى مشكلة"
                                        <br/>
                                        7- طلب سحب ملفك من الجامعة فى مصر و دة ممكن يرخم فيها و ممكن يعدهالك يعنى انت ونصيبك
                                        <br/>
                                        فيه اللى قاله انا سحبت و صدقه وعدهاله وفيه اللى رخم عليه وقاله هاتلى جواب السحب
                                        <br/>
                                        المهم هتسلمله الورق دة و كمان رقم الموافقة الامنية و هيعملك ملف و هتاخد ورقة مختومة منه ولازم تختمها من مكتب رقم 4 تقريبا و هو هيقولك و متنساش الختم دة
                                        <br/>
                                        = لو انت اكتر من 22 سنة فلازم أ- حامد يختملك على كلمة محول اللى هيكتبهالك فى الورقة اللى هتروح بيها لادارة التجنيد
                                        <br/>
                                        و هتروح لادارة التجنيد فى حلمية الزيتون " بالمترو "
                                        <br/>
                                        و خلى بالك مينفعش تدخل بشنطة ولا بشورت لادارة التجنيد ولا بشبشب تقريبا .. خلى باااالك لان المشوار ممكن يضيع عليك و يرجعوك و فاتحين تقريبا لحد الساعة 2 الضهر
                                        <br/>
                                        و هتتفتش و هتسيب موبايلك فى الامانات و هتدخل لعسكرى الاستعلامات و هيقولك روح لشباك كذة و هتقدم ورقك للظابط الموجود و ممكن يقولك فين سحب الملف بتاعك و يوقف ورقك لحد ما تسحبله الملف .. اللى حصل معايا شخصي
                                        <br/>
                                        هو : رايح تدرس ايه و فين
                                        <br/>
                                        انا : بكالوريوس ميكانيكا فى المانيا
                                        <br/>
                                        هو : كنت بتدرس ايه هنا و فين
                                        <br/>
                                        انا : نفس التخصص و كنت بدرس فى العاشر من رمضان
                                        <br/>
                                        هو : هتكمل ولا هتبدأ من الاول
                                        <br/>
                                        أنا : لا هكمل و مكتوب فى الورقة اللى معاك ان انا محول
                                        <br/>
                                        خلص الحوار و قالى استنى شوية و بعد نص ساعة تقريبا قالى تعالا و اخدت ورقة و مكتوب فيها التأجيل و ان مسموح ليا ان انا اسافر " الورقة دى احتفظ بيها " و قالى روح تانى للبعثات و هتيجى تانى عشان تطلع تصريح السفر
                                        <br/>
                                        رجعت تانى للبعثات و سلمت الورقة ل أ- حامد وقالى تعالا بكرا بقا لانهم خلاص هيقفلوا ومش هتلحق
                                        <br/>
                                        روحتله يوم الخميس يوم 21/6/2018
                                        <br/>
                                        وقولتله لازم اطلع تصريح السفر النهاردة لان مسافر بكرا فقالى تمام بس كدة هيطلع شهرين بس لحد 30/8
                                        <br/>
                                        وبعد مشاورات معاه و مع الموظفين فى المكتب ف وافق ان هو يكتبلى فى الورقة اللى هاخدها منه ان التصريح يبقا للسنة الجديدة 2019
                                        <br/>
                                        اخدت الورقة و روحت بيها لادارة التجنيد و سلمت ورقى و اخدت تصريح السفر ل
                                        30/8/2018
                                        <br/>
                                        و اخدت بالى و انا خارج و رجعت تانى للعسكرى المختص بالاستعلامات
                                        <br/>
                                        فقولتله انا متأجل ليا للسنة الجاية مش السنة دى ف قالى ارجع تانى للعسكرى و كلمه
                                        <br/>
                                        ف رجعتله و قولتله مكتوب فى الورقة اللى ادتهالك كذة فقالى استنى و اخد منى التصريح و استلمت واحد جديد بدايته من
                                        22/6/2018
                                        <br/>
                                        ونهايته
                                        21/6/2019
                                        <br/>
                                        وبس على كدة
                                        <br/>
                                        ----------------
                                        <br/>
                                        البوست فيه ناس كتيرة طلبته منى ف انا حاولت اكتب تفاصيل التفاصيل و ايه المطلوب
                                        <br/>
                                        يارب يكون مفيد ليكم
                                        <br/>
                                        اعملوا مينشن لاصحابكم عشان يستفادوا
                                        <br/>
                                        ..................
                                        <br/>
                                        - البنات مالهمش تصريح سفر من الجيش
                                        <br/>
                                        - لو مكتوب فى الباسبور مصرح بالسفر لحد يوم كذة ف انت لحد اليوم مش هتطلع تصريح سفر ولا هتمشى فى اجراءات و لو عدى اليوم فلازم تمشى فى اجراءات تصريح السفر
                                        <br/>
                                        - اللى معاه اعفا او مأجل ف انا معنديش معلومة للاسف والافضل تروح منطقة التجنيد و تسأل
                                        <br/>
                                        ..............
                                        <br/>
                                        <a href='https://www.facebook.com/groups/311111149267612/permalink/960965360948851/'>بوست اخر عن البعثات لطلاب الماستر</a>
                                    </h3>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </main>
            </article>
        );
    }
}

export default TravelPermit;
