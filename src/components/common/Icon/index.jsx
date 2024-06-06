import React from 'react';

// Import tất cả các icons vào một object
import ic_dashboard from '@icons/ic_dashboard.svg';
import ic_add from '@icons/ic_add.svg';
import ic_calendar from '@icons/ic_calendar.svg';
import ic_contact from '@icons/ic_contact.svg';
import ic_help_center from '@icons/ic_help_center.svg';
import ic_inbox from '@icons/ic_inbox.svg';
import ic_kanban from '@icons/ic_kanban.svg';
import ic_message from '@icons/ic_message.svg';
import ic_more from '@icons/ic_more.svg';
import ic_project from '@icons/ic_project.svg';
import ic_setting from '@icons/ic_setting.svg';
import ic_tasks from '@icons/ic_tasks.svg';
// Add more imports as needed

const icons = {
  dashboard:ic_dashboard,
  add:ic_add,
  calendar:ic_calendar,
  contact:ic_contact,
  help_center:ic_help_center,
  inbox:ic_inbox,
  kanban:ic_kanban,
  message:ic_message,
  more:ic_more,
  project:ic_project,
  setting:ic_setting,
  tasks:ic_tasks,
  // Add more icons as needed
};

const Icon = ({ name, width = 20, height = 24, color = '#778CA2', ...props }) => {
const IconSrc = icons[name];

if (!IconSrc) {
return null; // Hoặc bạn có thể trả về một default icon
}

return (
  <img
    src={IconSrc}
    alt={`${name} icon`}
    width={width}
    height={height}
    style={{ fill: color }}
    {...props}
  />
);
};


export default Icon;
