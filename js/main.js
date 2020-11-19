window.addEventListener("DOMContentLoaded", function () {
   "use strict";

   let answer = document.getElementById("answer"),
      saveBtn = document.getElementById("save-btn"),
      todo = document.getElementById("todo");

   class createElement {
      constructor(value) {
         this.value = value;
      }
      element() {
         let todoList = document.createElement("div");
         todoList.classList.add("todo-list");

         let task = document.createElement("input");
         task.setAttribute("readonly", "");
         task.classList.add("list");
         task.value = this.value;
         todoList.appendChild(task);

         let completedBtn = document.createElement("button");
         completedBtn.classList.add("list-completed");
         todoList.appendChild(completedBtn);

         let deleteBtn = document.createElement("button");
         deleteBtn.classList.add("list-delete");
         todoList.appendChild(deleteBtn);

         todo.appendChild(todoList);

         // localStorage.setItem("myTodo", JSON.stringify(todo));
         // if (localStorage.getItem("myTodo") != undefined) {
         //    todo = JSON.parse(localStorage.getItem("myTodo"));
         // }
      }
   }

   saveBtn.addEventListener("click", function () {
      if (answer.value != "") {
         let value = answer.value,
            newElem = new createElement(value);

         newElem.element();
         answer.value = "";
      } else {
         alert("Ошибка: Пустое поле!");
      }
      // localStorage.setItem("myTodo", JSON.stringify(todo));
   });

   // answer.addEventListener("keypress", function (keyPressed) {
   //    let keyEnter = 13;
   //    if (keyPressed.which == keyEnter && answer.value != "") {
   //       let value = answer.value,
   //          newElem = new createElement(value);

   //       newElem.element();
   //       answer.value = "";
   //    } else {
   //       alert("Ошибка: Пустое поле!");
   //    }
   // });

   // answer.addEventListener("keydown", function (event) {
   //    let keyEnter = 13,
   //       target = event.target;
   //    if (target.keydown === keyEnter && answer.value != "") {
   //       let value = answer.value,
   //          newElem = new createElement(value);

   //       newElem.element();
   //       answer.value = "";
   //    } else {
   //       alert("Ошибка: Пустое поле!");
   //    }
   // });

   todo.addEventListener("click", function (event) {
      let target = event.target,
         todoList = document.querySelectorAll(".todo-list"),
         input = document.querySelectorAll(".list"),
         completedBtnAll = document.querySelectorAll(".list-completed"),
         deleteBtnAll = document.querySelectorAll(".list-delete");

      if (target.classList.contains("list-completed")) {
         for (let i = 0; i < completedBtnAll.length; i++) {
            if (target == completedBtnAll[i]) {
               input[i].classList.toggle("active");
               completedBtnAll[i].classList.toggle("new-icon");
            }
         }
      }

      if (target.classList.contains("list-delete")) {
         deleteBtnAll.forEach(function (value, key) {
            if (target == value) {
               todoList[key].remove();
            }
         });
      }
   });
});

// =========================================== КОНЕЦ ================================================

// function createElement() {
//    let newElem = document.createElement("input");
//    newElem.classList.add("list");
//    // let newTodo = answer.value;
//    // newElem.append(newTodo);
//    newElem.value = answer.value;

//    let completedBtn = document.createElement("button");
//    completedBtn.classList.add("list-completed");
//    // todoList.appendChild(completedBtn);
//    let deleteBtn = document.createElement("button");
//    deleteBtn.classList.add("list-delete");
//    // todoList.appendChild(deleteBtn);
//    todo.appendChild(todoList).append(newElem, completedBtn, deleteBtn);
//    answer.value = "";
// }

// completedBtn.addEventListener("click", function () {
//    newElem.classList.toggle("active");
// });

// deleteBtn.addEventListener("click", function () {
//    todoList.classList.add("list-delete-none");
// });

// function createElement(text) {
//    let newElem = document.createElement("input");
//    todoList.appendChild(newElem);
//    let completedBtn = document.createElement("button");
//    completedBtn.classList.add("list-completed");
//    let deleteBtn = document.createElement("button");

//    deleteBtn.classList.add("list-delete");
//    newElem.classList.add("list");
//    newElem.textContent = text;
//    // deleteSpan.textContent = icon;
// 	todoList.appendChild(completedBtn);
// 	todoList.appendChild(deleteBtn);

//    }

// 	saveBtn.addEventListener("click", function () {
// 		if (answer.value != "") {
// 			createElement(answer.value);
// 		}
// 		answer.value = "";
// 	});

// 	completedBtn.addEventListener("click", function () {
//       newElem.classList.toggle("active");
//       // if (newElem == true) {
//       //    newElem.classList.add("non-active");
// 		// }
// 	});

//    deleteBtn.addEventListener("click", function (event) {
//       // let target = event.target;
//       // if (target && target.classList.contains("list-delete")) {
//       //    for (let i = 0; i < deleteSpan.length; i++) {
//       //       if (target == deleteSpan[i]) {
//       //          list.removeChild(newElem);
//       //          // list.removeChild(deleteSpan[i]);
//       //          deleteSpan = deleteSpan.classList.remove("list-delete");
//       //       }
//       //    }
//       // }
//       todo.removeChild(todoList);
//       // deleteSpan = deleteSpan.classList.remove("list-delete");
//       // completedSpan = completedSpan.classList.remove("list-completed");
//       // for (let i = 0; i < deleteSpan.length; i--) {
//       //    if (deleteSpan[i] == -1) {
//       //       deleteSpan = deleteSpan.classList.remove("list-delete");
//       //       deleteSpan = deleteSpan.classList.add("list-delete-none");
//       //    }
//       // }
//       // if (deleteSpan.length == -1) {
//       //    deleteSpan = "";
//       // }
//    });

//    // todoList.appendChild(newElem);
// }

// // saveBtn.addEventListener("click", function () {
// //    if (answer.value != "") {
// //       createElement(answer.value);
// //    }
// //    answer.value = "";
// // });

// // let todoList = [];

// // saveBtn.addEventListener("click", function () {
// //    let newToDo = {
// //       todo: answer.value,
// //       checked: false,
// //    };

// //    todoList.push(newToDo);

// // });
