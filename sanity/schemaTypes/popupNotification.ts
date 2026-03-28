/** @format */

import { defineField, defineType } from "sanity";

export const popupNotification = defineType({
  name: "popupNotification",
  title: "Popup Notification",
  type: "document",
  fields: [
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Toggle to show or hide the popup on the website.",
      initialValue: false,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The main headline of the popup.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "The body text of the popup.",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "Label for the action button.",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      description: "URL the action button should navigate to.",
    }),
    defineField({
      name: "showOncePerSession",
      title: "Show Once Per Session",
      type: "boolean",
      description: "If enabled, the popup will only show once per user session.",
      initialValue: true,
    }),
    defineField({
      name: "delay",
      title: "Display Delay (seconds)",
      type: "number",
      description: "How many seconds to wait before showing the popup.",
      initialValue: 2,
    }),
  ],
});
