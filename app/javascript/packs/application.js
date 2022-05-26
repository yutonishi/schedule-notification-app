// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "@fortawesome/fontawesome-free/js/all";
require('jquery')

import "javascripts/common/cancel_btn"
import "javascripts/common/logout_modal_btn"
import "javascripts/tasks/add_task_modal_btn"
import "javascripts/tasks/delete_task_modal_btn"
import "javascripts/tasks/edit_task_modal_btn"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
