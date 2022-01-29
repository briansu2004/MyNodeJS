/* tag data */
const tagData = [
  {
    name: "[UCAR]_[TV_LSM_102]_[Gold]",
    type: "Tag",
    tagGroupReference: "[UCAR]_[TV_LSM_102]",
    createdTimestamp: "2021-08-16T14:52:09.771317Z",
    createdUserId: "d1c0ba8b-6403-4dbc-ad91-95308d0d5279",
    createdUser: "peterw",
  },
  {
    name: "[UCAR]_[TV_LSM_102]_[Silver]",
    type: "Tag",
    tagGroupReference: "[UCAR]_[TV_LSM_102]",
    createdTimestamp: "2021-08-12T17:52:35.863886Z",
    createdUserId: "d1c0ba8b-6403-4dbc-ad91-95308d0d5279",
    createdUser: "peterw",
  },
  {
    name: "[UCAR]_[TV_LSM_102]_[Bronze]",
    type: "Tag",
    tagGroupReference: "[UCAR]_[TV_LSM_102]",
    createdTimestamp: "2021-05-04T15:48:56.71Z",
  },
  {
    name: "[UCAR]_[TV_LSM_103]_[0-10]",
    type: "Tag",
    tagGroupReference: "[UCAR]_[TV_LSM_103]",
    createdTimestamp: "2021-08-12T17:53:05.045504Z",
    createdUserId: "d1c0ba8b-6403-4dbc-ad91-95308d0d5279",
    createdUser: "peterw",
  },
  {
    name: "[UCAR]_[TV_LSM_103]_[10-50]",
    type: "Tag",
    tagGroupReference: "[UCAR]_[TV_LSM_103]",
    createdTimestamp: "2021-05-04T15:49:18.04Z",
  },
  {
    name: "[UCAR]_[TV_LSM_103]_[50-100]",
    type: "Tag",
    tagGroupReference: "[UCAR]_[TV_LSM_103]",
    createdTimestamp: "2021-08-16T14:51:16.202094Z",
    createdUserId: "d1c0ba8b-6403-4dbc-ad91-95308d0d5279",
    createdUser: "peterw",
  },
  {
    name: "[UCAR]_[TV_LSM_104]_[0-3]",
    type: "Tag",
    tagGroupReference: "[UCAR]_[TV_LSM_104]",
    createdTimestamp: "2021-05-04T15:49:37.065Z",
  },
  {
    name: "[UCAR]_[TV_LSM_104]_[3-88]",
    type: "Tag",
    tagGroupReference: "[UCAR]_[TV_LSM_104]",
    createdTimestamp: "2021-05-04T15:50:10.869Z",
  },
  {
    name: "[UCAR]_[TV_LSM_104]_[70]",
    type: "Tag",
    tagGroupReference: "[UCAR]_[TV_LSM_104]",
    createdTimestamp: "2021-05-04T15:50:38.039Z",
  },
];

/* tag data grouped */
const tagGrouped = [
  {
    key: "UCARModelToTag:[UCAR]_[TV_LSM_102]",
    value: [
      "[UCAR]_[TV_LSM_102]_[Gold]",
      "[UCAR]_[TV_LSM_102]_[Silver]",
      "[UCAR]_[TV_LSM_102]_[Bronze]",
    ],
  },
  {
    key: "UCARModelToTag:[UCAR]_[TV_LSM_103]",
    value: [
      "[UCAR]_[TV_LSM_103]_[0-10]",
      "[UCAR]_[TV_LSM_103]_[10-50]",
      "[UCAR]_[TV_LSM_103]_[50-100]",
    ],
  },
  {
    key: "UCARModelToTag:[UCAR]_[TV_LSM_104]",
    value: [
      "[UCAR]_[TV_LSM_104]_[0-3]",
      "[UCAR]_[TV_LSM_104]_[3-88]",
      "[UCAR]_[TV_LSM_104]_[70]",
    ],
  },
];

module.exports = { tagData, tagGrouped };
