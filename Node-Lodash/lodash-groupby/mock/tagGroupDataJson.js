/* tag data */
const tagGroups = [
  {
    name: '[UCAR]_[TV_LSM_102]_[Some Display Name 1]',
    type: 'TagGroup',
    createdTimestamp: '2021-08-12T18:44:23.799517Z',
    createdUserId: 'd1c0ba8b-6403-4dbc-ad91-95308d0d5279',
    extendedParameters: {
      tagCategory: ['customerSegmentTag'],
      UCARModelId: ['TV_LSM_102'],
      customerSegmentModelType: ['segment']
    }
  },
  {
    name: '[UCAR]_[TV_LSM_103]_[Some Display Name 2]',
    type: 'TagGroup',
    createdTimestamp: '2021-05-04T15:46:15.557Z',
    extendedParameters: {
      tagCategory: ['customerSegmentTag'],
      UCARModelId: ['TV_LSM_103'],
      customerSegmentModelType: ['score'],
      customerSegmentRangeMin: ['0'],
      customerSegmentRangeMax: ['100']
    }
  },
  {
    name: '[UCAR]_[TV_LSM_104]_[Some Display Name 3]',
    type: 'TagGroup',
    createdTimestamp: '2021-08-12T18:17:01.067285Z',
    createdUserId: 'd1c0ba8b-6403-4dbc-ad91-95308d0d5279',
    extendedParameters: {
      tagCategory: ['customerSegmentTag'],
      UCARModelId: ['TV_LSM_104'],
      customerSegmentModelType: ['percentile'],
      customerSegmentRangeMin: ['0'],
      customerSegmentRangeMax: ['100']
    }
  },
  {
    name: '[UCAR]_[TV_LSM_105]_[Some Display Name 105]',
    type: 'TagGroup',
    createdTimestamp: '2021-08-12T18:17:01.067285Z',
    createdUserId: 'd1c0ba8b-6403-4dbc-ad91-95308d0d5279',
    extendedParameters: {
      tagCategory: ['customerSegmentTag'],
      UCARModelId: ['TV_LSM_105'],
      customerSegmentModelType: ['percentile'],
      customerSegmentRangeMin: ['0'],
      customerSegmentRangeMax: ['100']
    }
  },
  {
    name: '[UCAR]_[TV_LSM_106]_[Some Display Name 106]',
    type: 'TagGroup',
    createdTimestamp: '2021-08-12T18:17:01.067285Z',
    createdUserId: 'd1c0ba8b-6403-4dbc-ad91-95308d0d5279',
    extendedParameters: {
      tagCategory: ['customerSegmentTag'],
      UCARModelId: ['TV_LSM_106'],
      customerSegmentModelType: ['percentile'],
      customerSegmentRangeMin: ['0'],
      customerSegmentRangeMax: ['100']
    }
  }
];

const tags = [
  {
    name: '[UCAR]_[TV_LSM_102]_[Gold]',
    type: 'Tag',
    tagGroupReference: '[UCAR]_[TV_LSM_102]_[Some Display Name 1]',
    createdTimestamp: '2021-08-16T14:52:09.771317Z',
    createdUserId: 'd1c0ba8b-6403-4dbc-ad91-95308d0d5279',
    createdUser: 'peterw'
  },
  {
    name: '[UCAR]_[TV_LSM_102]_[Silver]',
    type: 'Tag',
    tagGroupReference: '[UCAR]_[TV_LSM_102]_[Some Display Name 1]',
    createdTimestamp: '2021-08-12T17:52:35.863886Z',
    createdUserId: 'd1c0ba8b-6403-4dbc-ad91-95308d0d5279',
    createdUser: 'peterw'
  },
  {
    name: '[UCAR]_[TV_LSM_102]_[Bronze]',
    type: 'Tag',
    tagGroupReference: '[UCAR]_[TV_LSM_102]_[Some Display Name 1]',
    createdTimestamp: '2021-05-04T15:48:56.71Z'
  },
  {
    name: '[UCAR]_[TV_LSM_103]_[0-10]',
    type: 'Tag',
    tagGroupReference: '[UCAR]_[TV_LSM_103]_[Some Display Name 2]',
    createdTimestamp: '2021-08-12T17:53:05.045504Z',
    createdUserId: 'd1c0ba8b-6403-4dbc-ad91-95308d0d5279',
    createdUser: 'peterw'
  },
  {
    name: '[UCAR]_[TV_LSM_103]_[10-50]',
    type: 'Tag',
    tagGroupReference: '[UCAR]_[TV_LSM_103]_[Some Display Name 2]',
    createdTimestamp: '2021-05-04T15:49:18.04Z'
  },
  {
    name: '[UCAR]_[TV_LSM_103]_[50-100]',
    type: 'Tag',
    tagGroupReference: '[UCAR]_[TV_LSM_103]_[Some Display Name 2]',
    createdTimestamp: '2021-08-16T14:51:16.202094Z',
    createdUserId: 'd1c0ba8b-6403-4dbc-ad91-95308d0d5279',
    createdUser: 'peterw'
  },
  {
    name: '[UCAR]_[TV_LSM_104]_[0-3]',
    type: 'Tag',
    tagGroupReference: '[UCAR]_[TV_LSM_104]_[Some Display Name 3]',
    createdTimestamp: '2021-05-04T15:49:37.065Z'
  },
  {
    name: '[UCAR]_[TV_LSM_104]_[3-88]',
    type: 'Tag',
    tagGroupReference: '[UCAR]_[TV_LSM_104]_[Some Display Name 3]',
    createdTimestamp: '2021-05-04T15:50:10.869Z'
  },
  {
    name: '[UCAR]_[TV_LSM_104]_[70]',
    type: 'Tag',
    tagGroupReference: '[UCAR]_[TV_LSM_104]_[Some Display Name 3]',
    createdTimestamp: '2021-05-04T15:50:38.039Z'
  }
];

/* tag data grouped */
const tagGrouped = [
  {
    key: 'UCARModelToTag:[UCAR]_[TV_LSM_102]',
    value: [
      '[UCAR]_[TV_LSM_102]_[Gold]',
      '[UCAR]_[TV_LSM_102]_[Silver]',
      '[UCAR]_[TV_LSM_102]_[Bronze]'
    ]
  },
  {
    key: 'UCARModelToTag:[UCAR]_[TV_LSM_103]',
    value: [
      '[UCAR]_[TV_LSM_103]_[0-10]',
      '[UCAR]_[TV_LSM_103]_[10-50]',
      '[UCAR]_[TV_LSM_103]_[50-100]'
    ]
  },
  {
    key: 'UCARModelToTag:[UCAR]_[TV_LSM_104]',
    value: [
      '[UCAR]_[TV_LSM_104]_[0-3]',
      '[UCAR]_[TV_LSM_104]_[3-88]',
      '[UCAR]_[TV_LSM_104]_[70]'
    ]
  }
];

module.exports = { tagGroups, tags, tagGrouped };
