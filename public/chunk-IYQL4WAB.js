import{k as V}from"./chunk-TRIUQ5RG.js";import"./chunk-XYUT62KH.js";import{a as S,b as P,e as N,f as w,g as C,i as d,k as j,m as R,n as A,o as D,p as T,q as I}from"./chunk-JPEF7UKI.js";import{j as k}from"./chunk-VPBQD2SF.js";import{Bb as f,Bc as O,Db as h,Lb as e,Nb as c,Wa as u,Xa as _,aa as g,ka as F,la as E,mb as z,ob as v,sa as b,ta as x,ub as n,vb as t,wb as i,yb as M,yc as y}from"./chunk-AYVRXU7V.js";import"./chunk-CQCHLVVT.js";function B(l,o){if(l&1){let m=M();n(0,"li")(1,"strong"),e(2,"Name:"),t(),e(3),i(4,"br"),n(5,"strong"),e(6,"Rail Name:"),t(),e(7),i(8,"br"),n(9,"strong"),e(10,"Date:"),t(),e(11),i(12,"br"),n(13,"strong"),e(14,"Comment:"),t(),e(15),i(16,"br"),n(17,"strong"),e(18,"Check:"),t(),e(19),i(20,"br"),n(21,"button",16),f("click",function(){let r=b(m).$implicit,s=h();return x(s.updateReservation(r.name,{name:"Updated Name"}))}),e(22,"Update"),t(),n(23,"button",16),f("click",function(){let r=b(m).$implicit,s=h();return x(s.deleteReservation(r.name))}),e(24,"Delete"),t(),i(25,"hr"),t()}if(l&2){let m=o.$implicit;u(3),c(" ",m.name,""),u(4),c(" ",m.rail.railName,""),u(4),c(" ",m.rail.date,""),u(4),c(" ",m.comment,""),u(4),c(" ",m.check?"Yes":"No","")}}var K=(()=>{let o=class o{constructor(a){this.afs=a,this.railReservationForm=new C({name:new d(""),rail:new C({railName:new d(""),date:new d("")}),comment:new d(""),check:new d(!1)}),this.reservations=[]}ngOnInit(){this.fetchReservations()}onSubmit(){let a=this.railReservationForm.value;this.afs.collection("reservations").add(a).then(()=>{console.log("Reservation added successfully"),this.fetchReservations()}).catch(r=>{console.error("Error adding reservation: ",r)}),this.railReservationForm.reset()}fetchReservations(){this.afs.collection("reservations").valueChanges().subscribe(a=>{this.reservations=a},a=>{console.error("Error fetching reservations: ",a)})}updateReservation(a,r){this.afs.collection("reservations",s=>s.where("name","==",a)).get().subscribe(s=>{s.forEach(p=>{this.afs.collection("reservations").doc(p.id).update(r).then(()=>{console.log("Reservation updated successfully"),this.fetchReservations()}).catch(U=>{console.error("Error updating reservation: ",U)})})})}deleteReservation(a){this.afs.collection("reservations",r=>r.where("name","==",a)).get().subscribe(r=>{r.forEach(s=>{this.afs.collection("reservations").doc(s.id).delete().then(()=>{console.log("Reservation deleted successfully"),this.fetchReservations()}).catch(p=>{console.error("Error deleting reservation: ",p)})})})}};o.\u0275fac=function(r){return new(r||o)(_(V))},o.\u0275cmp=F({type:o,selectors:[["app-contact"]],decls:80,vars:2,consts:[[1,"container"],[3,"ngSubmit","formGroup"],["for","name"],["size","25","type","text","formControlName","name"],["formGroupName","rail"],["for","railName"],["size","25","type","text","formControlName","railName"],["for","date"],["size","25","type","date","formControlName","date"],["for","comment"],["type","text","formControlName","comment"],["for","check"],["size","25","type","checkbox","formControlName","check",1,"checkbox"],["type","submit"],[4,"ngFor","ngForOf"],[1,"important"],[3,"click"]],template:function(r,s){r&1&&(n(0,"div",0)(1,"h1"),e(2,"Rail Reservation Form"),t(),n(3,"form",1),f("ngSubmit",function(){return s.onSubmit()}),n(4,"div")(5,"label",2),e(6,"Teljes n\xE9v:"),t(),i(7,"input",3),t(),n(8,"div",4)(9,"div")(10,"label",5),e(11,"T\xFAra neve:"),t(),i(12,"input",6),t(),n(13,"div")(14,"label",7),e(15,"T\xFAra id\u0151pontja:"),t(),i(16,"input",8),t()(),n(17,"div")(18,"label",9),e(19,"Megjegyz\xE9s:"),t(),i(20,"textarea",10),t(),n(21,"div")(22,"label",11),e(23,"*Elfogadom a felt\xE9teleket:"),t(),i(24,"input",12),t(),n(25,"div")(26,"button",13),e(27,"Foglal\xE1s"),t()()(),n(28,"h2"),e(29,"Reservations"),t(),n(30,"ul"),z(31,B,26,5,"li",14),t()(),i(32,"br")(33,"br"),n(34,"div",15)(35,"h3"),e(36,"*Fontos Inform\xE1ci\xF3k T\xFArafoglal\xE1s El\u0151tt"),t(),n(37,"p",15),e(38," Kedves T\xFAr\xE1z\xF3k!"),i(39,"br")(40,"br"),e(41," Miel\u0151tt foglaln\xE1tok, k\xE9rj\xFCk, olvass\xE1tok el az al\xE1bbiakat:"),i(42,"br")(43,"br"),n(44,"i"),e(45,"Saj\xE1t felel\u0151ss\xE9g:"),t(),e(46," A t\xFAr\xE1n mindenki saj\xE1t felel\u0151ss\xE9g\xE9re vesz r\xE9szt. K\xE9rj\xFCk, m\xE9rlegelj\xE9tek saj\xE1t eg\xE9szs\xE9gi \xE1llapototokat \xE9s k\xE9pess\xE9geiteket."),i(47,"br")(48,"br"),n(49,"i"),e(50,"Eg\xE9szs\xE9gi \xE1llapot:"),t(),e(51," Csak akkor vegyetek r\xE9szt, ha megfelel\u0151 eg\xE9szs\xE9gi \xE1llapotban vagytok. Ha b\xE1rmilyen eg\xE9szs\xE9g\xFCgyi probl\xE9m\xE1tok van, el\u0151zetesen konzult\xE1ljatok orvosotokkal."),i(52,"br")(53,"br"),n(54,"i"),e(55,"Alkohol- \xE9s drogtilalom:"),t(),e(56," A t\xFAr\xE1n ittas vagy b\xF3dult \xE1llapotban nem lehet r\xE9szt venni. Az ilyen \xE1llapotban l\xE9v\u0151 szem\xE9lyeket kiz\xE1rjuk a t\xFAr\xE1b\xF3l."),i(57,"br")(58,"br"),n(59,"i"),e(60,"Felszerel\xE9s \xE9s ruh\xE1zat:"),t(),e(61," Viseljetek megfelel\u0151 ruh\xE1zatot \xE9s l\xE1bbelit. Gondoskodjatok elegend\u0151 \xE9lelmiszerr\u0151l \xE9s iv\xF3v\xEDzr\u0151l."),i(62,"br")(63,"br"),n(64,"i"),e(65,"Balesetbiztos\xEDt\xE1s:"),t(),e(66," Aj\xE1nlott \xE9rv\xE9nyes balesetbiztos\xEDt\xE1ssal rendelkezni, ami fedezi a t\xFAr\xE1z\xE1s sor\xE1n esetlegesen bek\xF6vetkez\u0151 baleseteket."),i(67,"br")(68,"br"),n(69,"i"),e(70,"K\xF6rnyezetv\xE9delem:"),t(),e(71," Ne szemeteljetek, \xE9s tarts\xE1tok tiszteletben a term\xE9szetet."),i(72,"br")(73,"br"),n(74,"i"),e(75,"T\xFAravezet\u0151 utas\xEDt\xE1sai:"),t(),e(76," K\xF6vess\xE9tek a t\xFAravezet\u0151 utas\xEDt\xE1sait. Az utas\xEDt\xE1sokat be nem tart\xF3kat kiz\xE1rhatjuk a t\xFAr\xE1b\xF3l."),i(77,"br")(78,"br"),e(79," K\xF6sz\xF6nj\xFCk a meg\xE9rt\xE9st \xE9s az egy\xFCttm\u0171k\xF6d\xE9st!"),t()()),r&2&&(u(3),v("formGroup",s.railReservationForm),u(28),v("ngForOf",s.reservations))},dependencies:[y,j,P,S,N,w,R,D,A],styles:[".container[_ngcontent-%COMP%]{max-width:800px;margin:0 auto;padding:20px;border:1px solid #ddd;border-radius:8px;background-color:#f9f9f9;box-shadow:0 2px 4px #0000001a}h1[_ngcontent-%COMP%]{text-align:center;color:#333;margin-bottom:20px}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column}label[_ngcontent-%COMP%]{margin-bottom:5px;font-weight:700;color:#555}input[type=text][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{padding:10px;border:1px solid #ccc;border-radius:4px;font-size:14px}textarea[_ngcontent-%COMP%]{resize:vertical}input[type=checkbox][_ngcontent-%COMP%]{margin-right:10px}button[_ngcontent-%COMP%]{padding:10px 15px;border:none;border-radius:4px;background-color:#007bff;color:#fff;font-size:16px;cursor:pointer;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}h2[_ngcontent-%COMP%]{text-align:center;color:#333;margin-top:40px}ul[_ngcontent-%COMP%]{list-style:none;padding:0}li[_ngcontent-%COMP%]{padding:10px;border:1px solid #ddd;border-radius:4px;margin-bottom:10px;background-color:#fff;box-shadow:0 2px 4px #0000000d}li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:5px;color:#333}li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;padding:5px 10px;border:none;border-radius:4px;background-color:#28a745;color:#fff;font-size:14px;cursor:pointer;transition:background-color .3s ease}li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#218838}li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{background-color:#dc3545}li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type:hover{background-color:#c82333}hr[_ngcontent-%COMP%]{margin-top:10px;border:none;border-top:1px solid #eee}.important[_ngcontent-%COMP%]{max-width:800px;margin:40px auto 0;padding:20px;border:1px solid #ddd;border-radius:8px;background-color:#fff3cd;box-shadow:0 2px 4px #0000001a}.important[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#856404;margin-bottom:20px}.important[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#856404;line-height:1.6}"]});let l=o;return l})();var H=[{path:"",component:K}],$=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=E({type:o}),o.\u0275inj=g({imports:[k.forChild(H),k]});let l=o;return l})();var ae=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=E({type:o}),o.\u0275inj=g({imports:[O,$,I,T]});let l=o;return l})();export{ae as ContactModule};