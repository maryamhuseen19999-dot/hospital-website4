document.addEventListener("DOMContentLoaded", function () {

const departments = {

heart: {
title: "قسم القلب",
description: "يهتم قسم القلب بتشخيص وعلاج أمراض القلب والأوعية الدموية.",
conditions: ["أمراض الشرايين التاجية", "ضعف عضلة القلب", "اضطراب ضربات القلب"],
doctors: ["د. أحمد محمد", "د. محمود علي", "د. سارة حسن"],
diseases: [
{
name: "أمراض الشرايين التاجية",
causes: "تراكم الدهون والكوليسترول داخل الشرايين.",
symptoms: "ألم الصدر وضيق التنفس والتعب.",
image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600"
},
{
name: "ضعف عضلة القلب",
causes: "قد يحدث بسبب ارتفاع ضغط الدم أو بعض أمراض القلب.",
symptoms: "الإرهاق وضيق التنفس وتورم القدمين.",
image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
}
]
},

eyes: {
title: "قسم العيون",
description: "يقدم القسم خدمات فحص وعلاج أمراض العيون والنظر.",
conditions: ["قصر النظر", "طول النظر", "التهاب العين"],
doctors: ["د. محمد إبراهيم", "د. منى أحمد"],
diseases: [
{
name: "قصر النظر",
causes: "قد يرتبط بشكل العين أو طول مقلة العين.",
symptoms: "صعوبة رؤية الأشياء البعيدة بوضوح.",
image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600"
},
{
name: "التهاب العين",
causes: "قد ينتج عن عدوى أو حساسية.",
symptoms: "احمرار العين والحكة والدموع.",
image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600"
}
]
},

children: {
title: "قسم الأطفال",
description: "يهتم بصحة الأطفال ومتابعة نموهم وعلاج الأمراض الشائعة.",
conditions: ["نزلات البرد", "الحساسية", "اضطرابات الجهاز الهضمي"],
doctors: ["د. سارة محمد", "د. أحمد حسن"],
diseases: [
{
name: "نزلات البرد",
causes: "تحدث بسبب عدوى فيروسية.",
symptoms: "الرشح والسعال والعطس وارتفاع الحرارة أحيانًا.",
image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600"
},

{
name: "الحساسية",
causes: "استجابة الجسم لبعض المواد المسببة للحساسية.",
symptoms: "العطس والحكة والطفح الجلدي أحيانًا.",
image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600"
}
]
},

teeth: {
title: "قسم الأسنان",
description: "يقدم القسم خدمات الكشف على الأسنان وعلاج مشكلاتها.",
conditions: ["تسوس الأسنان", "التهاب اللثة", "ألم الأسنان"],
doctors: ["د. كريم علي", "د. منى محمود"],
diseases: [
{
name: "تسوس الأسنان",
causes: "تراكم البكتيريا وتناول السكريات وعدم الاهتمام بنظافة الأسنان.",
symptoms: "ألم الأسنان وظهور ثقوب أو بقع عليها.",
image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600"
},
{
name: "التهاب اللثة",
causes: "تراكم طبقة البلاك حول الأسنان.",
symptoms: "احمرار اللثة وتورمها ونزيفها أحيانًا.",
image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600"
}
]
},

skin: {
title: "قسم الجلدية",
description: "يهتم بتشخيص وعلاج الأمراض الجلدية ومشكلات البشرة.",
conditions: ["حب الشباب", "الإكزيما", "الحساسية الجلدية"],
doctors: ["د. ندى أحمد", "د. يوسف محمد"],
diseases: [
{
name: "حب الشباب",
causes: "قد يرتبط بانسداد المسام والتغيرات الهرمونية.",
symptoms: "ظهور حبوب ورؤوس سوداء أو بيضاء.",
image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600"
},
{
name: "الإكزيما",
causes: "قد ترتبط بعوامل وراثية ومهيجات بيئية.",
symptoms: "جفاف الجلد والحكة والاحمرار.",
image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=600"
}
]
},

bones: {
title: "قسم العظام",
description: "يعالج القسم مشكلات العظام والمفاصل والعضلات.",
conditions: ["آلام المفاصل", "هشاشة العظام", "إصابات العظام"],
doctors: ["د. عمرو حسن", "د. خالد محمود"],
diseases: [
{
name: "هشاشة العظام",
causes: "انخفاض كثافة العظام مع عوامل مثل التقدم في العمر.",
symptoms: "قد لا تظهر أعراض واضحة في البداية.",
image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600"
},
{
name: "التهاب المفاصل",
causes: "قد ينتج عن الالتهاب أو تآكل المفاصل.",
symptoms: "ألم وتيبس وتورم المفاصل.",
image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
}
]
},

brain: {
title: "قسم المخ والأعصاب",
description: "يهتم بتشخيص أمراض الجهاز العصبي والمخ.",
conditions: ["الصداع النصفي", "الصرع", "التهاب الأعصاب"],
doctors: ["د. أحمد سامي", "د. منى علي"],
diseases: [
{
name: "الصداع النصفي",
causes: "قد يرتبط بعوامل وراثية أو محفزات معينة.",
symptoms: "صداع متكرر وقد يصاحبه غثيان وحساسية للضوء.",
image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600"
},
{
name: "التهاب الأعصاب",
causes: "قد ينتج عن السكري أو نقص بعض الفيتامينات أو أسباب أخرى.",
symptoms: "تنميل أو ألم أو ضعف في بعض أجزاء الجسم.",
image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600"
}
]
},

internal: {
title: "قسم الباطنة",
description: "يهتم بتشخيص وعلاج الأمراض الداخلية ومتابعة الحالة الصحية.",
conditions: ["ارتفاع ضغط الدم", "السكري", "فقر الدم"],
doctors: ["د. محمد عادل", "د. سارة إبراهيم"],
diseases: [
{
name: "ارتفاع ضغط الدم",
causes: "قد يرتبط بالوراثة أو نمط الحياة أو أمراض أخرى.",
symptoms: "غالبًا لا تظهر أعراض واضحة.",
image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600"
},
{
name: "فقر الدم",
causes: "قد ينتج عن نقص الحديد أو أسباب أخرى.",
symptoms: "التعب والدوخة والشعور بالإرهاق.",
image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600"
}
]
},

women: {
title: "قسم النساء والتوليد",
description: "يقدم خدمات متابعة صحة المرأة والحمل.",
conditions: ["متابعة الحمل", "تكيس المبايض", "اضطرابات الدورة الشهرية"],
doctors: ["د. هبة محمد", "د. منى حسن"],
diseases: [
{
name: "تكيس المبايض",
causes: "يرتبط غالبًا باضطرابات هرمونية.",
symptoms: "قد تشمل اضطراب الدورة الشهرية وحب الشباب.",
image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
},
{
name: "اضطرابات الدورة الشهرية",
causes: "قد ترتبط بتغيرات هرمونية أو أسباب صحية مختلفة.",
symptoms: "عدم انتظام موعد الدورة أو تغير طبيعة النزيف.",
image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600"
}
]
},
ent: {
title: "قسم الأنف والأذن والحنجرة",
description: "يعالج القسم أمراض الأنف والأذن والحنجرة.",
conditions: ["التهاب الأذن", "التهاب الجيوب الأنفية", "التهاب الحلق"],
doctors: ["د. حسام علي", "د. أحمد فؤاد"],
diseases: [
{
name: "التهاب الأذن",
causes: "قد يحدث بسبب عدوى فيروسية أو بكتيرية.",
symptoms: "ألم الأذن وضعف السمع أحيانًا.",
image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600"
},
{
name: "التهاب الجيوب الأنفية",
causes: "قد ينتج عن عدوى أو حساسية.",
symptoms: "انسداد الأنف وصداع وألم بالوجه.",
image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=600"
}
]
},

chest: {
title: "قسم الصدر",
description: "يهتم بعلاج أمراض الجهاز التنفسي والرئتين.",
conditions: ["الربو", "التهاب الشعب الهوائية", "الحساسية الصدرية"],
doctors: ["د. خالد أحمد", "د. شريف محمود"],
diseases: [
{
name: "الربو",
causes: "قد يرتبط بعوامل وراثية ومحفزات بيئية.",
symptoms: "صفير الصدر والسعال وضيق التنفس.",
image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600"
},
{
name: "التهاب الشعب الهوائية",
causes: "غالبًا يحدث بسبب عدوى فيروسية.",
symptoms: "السعال وقد يصاحبه بلغم.",
image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600"
}
]
},

kidney: {
title: "قسم الكلى",
description: "يهتم بتشخيص ومتابعة أمراض الكلى ووظائفها.",
conditions: ["حصوات الكلى", "التهابات الكلى", "ضعف وظائف الكلى"],
doctors: ["د. أحمد محمود", "د. ياسر علي"],
diseases: [
{
name: "حصوات الكلى",
causes: "تتكون بسبب ترسب بعض الأملاح والمعادن.",
symptoms: "ألم في الجنب وقد يصاحبه تغير في البول.",
image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600"
},
{
name: "التهابات الكلى",
causes: "قد تحدث نتيجة وصول عدوى إلى الكلى.",
symptoms: "ألم بالجنب وارتفاع الحرارة أحيانًا.",
image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600"
}
]
},

urinary: {
title: "قسم المسالك البولية",
description: "يهتم بأمراض الجهاز البولي ومشكلاته.",
conditions: ["التهابات المسالك البولية", "حصوات المثانة", "مشكلات التبول"],
doctors: ["د. مصطفى حسن", "د. أحمد علي"],
diseases: [
{
name: "التهابات المسالك البولية",
causes: "تحدث غالبًا بسبب دخول بكتيريا إلى الجهاز البولي.",
symptoms: "حرقان أثناء التبول وكثرة الحاجة للتبول.",
image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600"
},
{
name: "حصوات المثانة",
causes: "قد تتكون بسبب تجمع الأملاح والمعادن في المثانة.",
symptoms: "ألم أسفل البطن وصعوبة التبول أحيانًا.",
image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
}
]
},

digestive: {
title: "قسم الجهاز الهضمي",
description: "يعالج أمراض المعدة والأمعاء والكبد والجهاز الهضمي.",
conditions: ["التهاب المعدة", "القولون العصبي", "ارتجاع المريء"],
doctors: ["د. سامح محمد", "د. كريم أحمد"],
diseases: [
{
name: "التهاب المعدة",
causes: "قد ينتج عن جرثومة المعدة أو بعض الأدوية.",
symptoms: "ألم أعلى البطن وغثيان.",
image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600"
},
{
name: "القولون العصبي",
causes: "قد يرتبط بحساسية الأمعاء وتفاعلها مع بعض العوامل.",
symptoms: "ألم البطن والانتفاخ وتغير حركة الأمعاء.",
image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600"
}
]
},

oncology: {
title: "قسم الأورام",
description: "يهتم بتشخيص الأورام ومتابعة خطط العلاج.",
conditions: ["أورام الثدي", "أورام القولون", "أورام الرئة"],
doctors: ["د. شريف حسن", "د. منى سامي"],
diseases: [
{
name: "أورام الثدي",
causes: "تتعدد عوامل الخطورة ومنها الوراثة والعمر.",
symptoms: "قد تشمل ظهور كتلة أو تغيرات في الثدي.",
image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
},
{
name: "أورام القولون",
causes: "تتأثر بعوامل وراثية وغذائية وصحية.",
symptoms: "قد تشمل تغيرات مستمرة في التبرز أو ألم البطن.",
image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600"
}
]
},

emergency: {
title: "قسم الطوارئ",
description: "يستقبل الحالات التي تحتاج إلى تقييم طبي عاجل.",
conditions: ["الإصابات", "الحوادث", "الحالات الطبية العاجلة"],
doctors: ["د. عمر محمد", "د. أحمد سامي"],
diseases: [
{name: "الإصابات",
causes: "قد تحدث نتيجة الحوادث أو السقوط.",
symptoms: "تختلف حسب نوع الإصابة ومكانها.",
image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600"
}
]
},

surgery: {
title: "قسم الجراحة",
description: "يقدم خدمات التقييم الجراحي والرعاية قبل وبعد العمليات.",
conditions: ["الجراحة العامة", "جراحة البطن", "متابعة ما بعد العمليات"],
doctors: ["د. طارق علي", "د. حسام محمد"],
diseases: [
{
name: "الزائدة الدودية",
causes: "قد تحدث بسبب انسداد الزائدة والتهابها.",
symptoms: "ألم بالبطن قد يتركز في الجانب الأيمن السفلي.",
image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600"
}
]
},

physiotherapy: {
title: "قسم العلاج الطبيعي",
description: "يساعد المرضى على تحسين الحركة والتعافي من الإصابات.",
conditions: ["آلام الظهر", "إصابات العضلات", "تأهيل المفاصل"],
doctors: ["د. محمود حسن", "د. ياسمين علي"],
diseases: [
{
name: "آلام الظهر",
causes: "قد تنتج عن إجهاد العضلات أو مشكلات العمود الفقري.",
symptoms: "ألم أو تيبس في منطقة الظهر.",
image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
}
]
},

lab: {
title: "قسم التحاليل الطبية",
description: "يقدم خدمات الفحوصات والتحاليل الطبية للمساعدة في التشخيص.",
conditions: ["تحاليل الدم", "تحاليل البول", "تحاليل السكر"],
doctors: ["د. منال أحمد", "د. هاني محمد"],
diseases: [
{
name: "فحوصات الدم",
causes: "تُطلب للكشف عن مؤشرات صحية مختلفة.",
symptoms: "تساعد النتائج الطبيب في تقييم الحالة.",
image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600"
}
]
},

radiology: {
title: "قسم الأشعة",
description: "يوفر فحوصات التصوير الطبي للمساعدة في تشخيص الحالات.",
conditions: ["الأشعة السينية", "الموجات فوق الصوتية", "الأشعة المقطعية"],
doctors: ["د. أحمد فؤاد", "د. سارة علي"],
diseases: [
{
name: "فحوصات الأشعة",
causes: "يحدد الطبيب نوع الفحص حسب الحالة.",
symptoms: "تساعد الصور الطبية في توضيح بعض المشكلات الداخلية.",
image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=600"
}
]
},

nutrition: {
title: "قسم التغذية العلاجية",
description: "يساعد على تنظيم التغذية بما يناسب الاحتياجات الصحية.",
conditions: ["التغذية المتوازنة", "التغذية لمرضى السكري", "تقييم الحالة الغذائية"],
doctors: ["د. آية محمد", "د. ندى حسن"],
diseases: [
{
name: "سوء التغذية",
causes: "قد ينتج عن عدم الحصول على العناصر الغذائية الكافية.",
symptoms: "تختلف الأعراض حسب العنصر الغذائي الناقص.",
image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600"
}
]
}

};

const departmentKey = document.body.dataset.department;
const department = departments[departmentKey];

if (department) {

const title = document.getElementById("departmentTitle");
const description = document.getElementById("departmentDescription");
const conditionsList = document.getElementById("conditionsList");
const doctorsList = document.getElementById("doctorsList");
const diseaseCards = document.getElementById("diseaseCards");

if (title) {
title.textContent = department.title;
}

if (description) {
description.textContent = department.description;
}

if (conditionsList) {
conditionsList.innerHTML = "";

department.conditions.forEach(function (condition) {
const li = document.createElement("li");
li.textContent = condition;
conditionsList.appendChild(li);
});
}

if (doctorsList) {
doctorsList.innerHTML = "";

department.doctors.forEach(function (doctor) {
const li = document.createElement("li");
li.textContent = doctor;
doctorsList.appendChild(li);
});
}

if (diseaseCards) {
diseaseCards.innerHTML = "";

department.diseases.forEach(function (disease) {

const card = document.createElement("div");
card.className = "disease-card";

const image = document.createElement("img");
image.src = disease.image;
image.alt = disease.name;

const heading = document.createElement("h3");
heading.textContent = disease.name;

const causes = document.createElement("p");
causes.textContent = "الأسباب: " + disease.causes;
const symptoms = document.createElement("p");
symptoms.textContent = "الأعراض: " + disease.symptoms;

card.appendChild(image);
card.appendChild(heading);
card.appendChild(causes);
card.appendChild(symptoms);

diseaseCards.appendChild(card);
});
}

const bookingButton = document.getElementById("bookingButton");
const bookingContainer = document.getElementById("bookingFormContainer");

if (bookingButton && bookingContainer) {

bookingButton.addEventListener("click", function () {

bookingContainer.innerHTML = "";

const form = document.createElement("form");
form.className = "booking-form";

form.innerHTML = `
<h2>حجز موعد في ${department.title}</h2>

<label>الاسم بالكامل</label>
<input type="text" id="patientName" placeholder="اكتب اسمك" required>

<label>رقم الهاتف</label>
<input type="tel" id="patientPhone" placeholder="اكتب رقم الهاتف" required>

<label>اختار الدكتور</label>
<select id="doctorSelect" required>
<option value="">اختار الدكتور</option>
${department.doctors.map(function (doctor) {
return `<option value="${doctor}">${doctor}</option>`;
}).join("")}
</select>

<label>تاريخ الموعد</label>
<input type="date" id="appointmentDate" required>

<label>ملاحظات إضافية</label>
<textarea id="patientNotes" placeholder="اكتب ملاحظاتك إن وجدت"></textarea>

<button type="submit">تأكيد الحجز</button>
`;

bookingContainer.appendChild(form);

form.addEventListener("submit", function (event) {
event.preventDefault();

const name = document.getElementById("patientName").value.trim();
const phone = document.getElementById("patientPhone").value.trim();
const doctor = document.getElementById("doctorSelect").value;
const date = document.getElementById("appointmentDate").value;

if (name === "" || phone === "" || doctor === "" || date === "") {
alert("من فضلك املأ جميع البيانات المطلوبة");
return;
}

if (!/^[0-9+\s-]{8,15}$/.test(phone)) {
alert("من فضلك اكتب رقم هاتف صحيح");
return;
}

if (date < new Date().toISOString().split("T")[0]) {
alert("من فضلك اختار تاريخًا صحيحًا");
return;
}

alert(
"تم تسجيل بيانات الحجز في هذا النموذج التجريبي\n" +
"الاسم: " + name + "\n" +
"الدكتور: " + doctor + "\n" +
"التاريخ: " + date
);

form.reset();
});

bookingContainer.scrollIntoView({
behavior: "smooth"
});

});

}

}

const topButton = document.getElementById("topButton");

if (topButton) {
topButton.addEventListener("click", function () {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});
}

});
