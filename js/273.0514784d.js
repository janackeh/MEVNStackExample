"use strict";(self["webpackChunkvue_mevn_stack_app"]=self["webpackChunkvue_mevn_stack_app"]||[]).push([[273],{6273:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("table",{staticClass:"table table-striped"},[t._m(0),e("tbody",t._l(t.Students,(function(n){return e("tr",{key:n._id},[e("td",[t._v(t._s(n.name))]),e("td",[t._v(t._s(n.email))]),e("td",[t._v(t._s(n.phone))]),e("td",[e("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"edit",params:{id:n._id}}}},[t._v("Edit ")]),e("button",{staticClass:"btn btn-danger",on:{click:function(e){return e.preventDefault(),t.deleteStudent(n._id)}}},[t._v("Delete")])],1)])})),0)])])])},a=[function(){var t=this,e=t._self._c;return e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Email")]),e("th",[t._v("Phone")]),e("th",[t._v("Actions")])])])}],l=n(8945),d={data(){return{Students:[]}},created(){let t="http://localhost:4000/api";l.Z.get(t).then((t=>{this.Students=t.data})).catch((t=>{console.log(t)}))},methods:{deleteStudent(t){let e=`http://localhost:4000/api/delete-student/${t}`,n=this.Students.findIndex((e=>e._id===t));window.confirm("Do you really want to delete?")&&l.Z["delete"](e).then((()=>{this.Students.splice(n,1)})).catch((t=>{console.log(t)}))}}},i=d,c=n(1001),u=(0,c.Z)(i,s,a,!1,null,null,null),o=u.exports}}]);
//# sourceMappingURL=273.0514784d.js.map