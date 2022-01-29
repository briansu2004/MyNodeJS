const { tagData } = require('./mock/tagData');

/*
  {
    name: '[UCAR]_[TV_LSM_102]_[Gold]',
    type: 'Tag',
    tagGroupReference: '[UCAR]_[TV_LSM_102]',
    createdTimestamp: '2021-08-16T14:52:09.771317Z',
    createdUserId: 'd1c0ba8b-6403-4dbc-ad91-95308d0d5279',
    createdUser: 'peterw',
  },
  {
    name: '[UCAR]_[TV_LSM_102]_[Silver]',
    type: 'Tag',
    tagGroupReference: '[UCAR]_[TV_LSM_102]',
    createdTimestamp: '2021-08-12T17:52:35.863886Z',
    createdUserId: 'd1c0ba8b-6403-4dbc-ad91-95308d0d5279',
    createdUser: 'peterw',
  },
=>
  {
    key: 'UCARModelToTag:[UCAR]_[TV_LSM_102]',
    value: ['[UCAR]_[TV_LSM_102]_[Gold]', '[UCAR]_[TV_LSM_102]_[Silver]', '[UCAR]_[TV_LSM_102]_[Bronze]'],
  },
*/

const prefix = 'UCARModelToTag:';
const tagGrouped = [];

tagData.map((t) => {
  const tf = tagGrouped.filter((e) => e.key === prefix + t.tagGroupReference);

  if (tf.length > 0) {
    tagGrouped
      .filter((e) => e.key === prefix + t.tagGroupReference)
      .forEach((e) => (e.value = e.value.concat(t.name)));
  } else {
    tagGrouped.push({ key: prefix + t.tagGroupReference, value: [t.name] });
  }
});

console.log('tagGrouped: ');
tagGrouped.map((t) => {
  console.log(t);
});
