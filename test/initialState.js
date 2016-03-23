export const initialState = {

  /*-----------------*/
  /*     SESSION     */
  /*-----------------*/

  auth: {
    isAuthenticated: false,
    isFetching: false,
    error: ''
  },

  /*--------------*/
  /*     USER     */
  /*--------------*/

  user: {
    uid: 1,
    username: 'username',
    name: 'User Name',
    email: 'user@email.com',
    facebook: 'facebook',
    twitter: 'twitter',
    avatar: 'http://placehold.it/300x300',
    media: 'Media',
    about: 'About'
  },

  /*----------------*/
  /*     STATUS     */
  /*----------------*/

  status: {
    fetching: false,
    error: ''
  },

  /*--------------*/
  /*     VIEW     */
  /*--------------*/

  view: {
    displayGallery: false,
    displaySignIn: false,
    displaySignUp: false,
    displayWordmap: false
  },

  /*---------------*/
  /*     MEDIA     */
  /*---------------*/

  media: {
    tile: 0,
    grid: [1, 2, 3, 4, 5, 6, 7, 8],
    filter: [],

    /*--------------*/
    /*     DATA     */
    /*--------------*/

    data: {
      '1': {
        mediaId: 1,
        userFeedbackId: 1,
        media: 'Media 1',
        title: 'Title 1',
        description: 'Description 1',
        tags: [],
        url_sm: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAGwAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAGwAoAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAHBwcHBwcMBwcMEQwMDBEXERERERcdFxcXFxcdIx0dHR0dHSMjIyMjIyMjKioqKioqMTExMTE3Nzc3Nzc3Nzc3P/bAEMBIiQkODQ4YDQ0YOacgJzm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5v/dAAQAA//aAAwDAQACEQMRAD8Axdppdpq06Kgy5Ap6w7huXkGt7GNyltNJtNXvKG7bkZ9O9RShIvvnn070aBcrbaXbQsqE4bipd0X94Uroep//0MO5INxIVORuOPpUtpIEEuW2/uzjnvVOigLBk5znmrV2yuyFTu/drn696q0UAFLSCn4oA//Z',
        url_md: 'https://placehold.it/400x300',
        url_lg: 'http://gratisography.com/pictures/286_1.jpg',
        width: 800,
        height: 600,
        showHiRes: false,
        feedback: [[1, 70], [2, 120], [3, 30], [4, 80], [5, 550], [6, 70], [7, 120], [8, 30], [9, 80], [5, 550]]
      },
      '2': {
        mediaId: 2,
        userFeedbackId: 2,
        media: 'Media 2',
        title: 'Title 2',
        description: 'Description 2',
        tags: [],
        url_sm: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHqADAAQAAAABAAAAFAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAFAAeAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAHBwcHBwcMBwcMEQwMDBEXERERERcdFxcXFxcdIx0dHR0dHSMjIyMjIyMjKioqKioqMTExMTE3Nzc3Nzc3Nzc3P/bAEMBIiQkODQ4YDQ0YOacgJzm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5v/dAAQAAv/aAAwDAQACEQMRAD8AnAOeSadk9jTTuVSxHAojDyANtx1xUG90QzTSR42E5PX6UhJPOTTblJQwboM9qjjbjbg8UxX1P//QulQylW6GpEjRRgDpTBUy9KkYxuOlQnrUzVDQM//Z',
        url_md: 'https://placehold.it/400x300',
        url_lg: 'http://gratisography.com/pictures/287_1.jpg',
        width: 800,
        height: 600,
        showHiRes: false,
        feedback: [[6, 10], [7, 20], [8, 30], [9, 40], [10, 50]]
      },
      '3': {
        mediaId: 3,
        userFeedbackId: 3,
        media: 'Media 3',
        title: 'Title 3',
        description: 'Description 3',
        tags: [],
        url_sm: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAGgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAGgAoAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAHBwcHBwcMBwcMEQwMDBEXERERERcdFxcXFxcdIx0dHR0dHSMjIyMjIyMjKioqKioqMTExMTE3Nzc3Nzc3Nzc3P/bAEMBIiQkODQ4YDQ0YOacgJzm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5v/dAAQAA//aAAwDAQACEQMRAD8A1ap3ErCTylGRtyfc1czgE+lUiyeYHIziuWD1Ohq462md2Mci4wMiruRVNSvmZUYzVo8USeoJC5opuaXNTcdj/9DTfJjNUFXzEHqM1oH7hqpD90fjXFc6kRoSnJ9RV/OVBqm33G/z3q0n+qFAMWjNB6VHTEf/2Q==',
        url_md: 'https://placehold.it/400x300',
        url_lg: 'http://gratisography.com/pictures/284_1.jpg',
        width: 800,
        height: 600,
        showHiRes: false,
        feedback: [[1, 10], [3, 20], [5, 30], [7, 40], [9, 50]]
      },
      '4': {
        mediaId: 4,
        userFeedbackId: 4,
        media: 'Media 4',
        title: 'Title 4',
        description: 'Description 4',
        tags: [],
        url_sm: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAGwAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAGwAoAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAHBwcHBwcMBwcMEQwMDBEXERERERcdFxcXFxcdIx0dHR0dHSMjIyMjIyMjKioqKioqMTExMTE3Nzc3Nzc3Nzc3P/bAEMBIiQkODQ4YDQ0YOacgJzm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5v/dAAQAA//aAAwDAQACEQMRAD8A2qKhMoC5NNM4rO5pYsUVW89eKXz1zii4WLNFQLMpFO81aLhY/9BWckY9e1RszDGKk2j5vYUxkXbnFZGgzdkk5pQx9fegKvHHY0qIpIU9KdhXJA3FLvb0oCKFIxTNi0rFXP/Z',
        url_md: 'https://placehold.it/400x300',
        url_lg: 'http://gratisography.com/pictures/283_1.jpg',
        width: 200,
        height: 150,
        showHiRes: false,
        feedback: [[2, 10], [4, 20], [6, 30], [8, 40], [10, 50]]
      },
      '5': {
        mediaId: 5,
        userFeedbackId: 5,
        media: 'Media 5',
        title: 'Title 5',
        description: 'Description 5',
        tags: [],
        url_sm: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAGgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAGgAoAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAHBwcHBwcMBwcMEQwMDBEXERERERcdFxcXFxcdIx0dHR0dHSMjIyMjIyMjKioqKioqMTExMTE3Nzc3Nzc3Nzc3P/bAEMBIiQkODQ4YDQ0YOacgJzm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5v/dAAQAA//aAAwDAQACEQMRAD8A2k45NVEkZ1MjPhSentT/ADgBVO2bJwVxkYpM0SNSJg+SOAOKmqtEwBJHept9Amh1FN3Uu6mB/9B7K8nyrUQSdZQR06Vah6mpR0H4Uyrk0Y2jipQ1RDpR3osO5NmlzUdLSKP/2Q==',
        url_md: 'https://placehold.it/400x300',
        url_lg: 'http://gratisography.com/pictures/281_1.jpg',
        width: 400,
        height: 300,
        showHiRes: false,
        feedback: [[1, 10], [3, 20], [5, 30], [7, 40], [9, 50]]
      },
      '6': {
        mediaId: 6,
        userFeedbackId: 6,
        media: 'Media 6',
        title: 'Title 6',
        description: 'Description 6',
        tags: [],
        url_sm: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAGwAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAGwAoAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAHBwcHBwcMBwcMEQwMDBEXERERERcdFxcXFxcdIx0dHR0dHSMjIyMjIyMjKioqKioqMTExMTE3Nzc3Nzc3Nzc3P/bAEMBIiQkODQ4YDQ0YOacgJzm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5v/dAAQAA//aAAwDAQACEQMRAD8A2oxhz/u/1NRQjckmf75rKXVGSQ71B7ccVYg1CBVYNkbm3UAWHUrcgnkAGrTKCAfpUAuIJHLK4PBqYlcDaeOKAM69QZA9qz/KFal1gkZNVNq+tAH/0MNz85+poDcZpG++31NWLZFbJYZxQBGqu5+WtCOKZEyZWHsKuxIg7U+VRt6UAZE3m/8APRjj1qDdP/fP51Zn46VVoA//2Q==',
        url_md: 'https://placehold.it/400x300',
        url_lg: 'http://gratisography.com/pictures/282_1.jpg',
        width: 400,
        height: 300,
        showHiRes: false,
        feedback: [[2, 10], [4, 20], [6, 30], [8, 40], [10, 50], [9, 10], [8, 20]]
      },
      '7': {
        mediaId: 7,
        userFeedbackId: 7,
        media: 'Media 7',
        title: 'Title 7',
        description: 'Description 7',
        tags: [],
        url_sm: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAGgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAGgAoAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAHBwcHBwcMBwcMEQwMDBEXERERERcdFxcXFxcdIx0dHR0dHSMjIyMjIyMjKioqKioqMTExMTE3Nzc3Nzc3Nzc3P/bAEMBIiQkODQ4YDQ0YOacgJzm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5v/dAAQAA//aAAwDAQACEQMRAD8AtFTGAcZJIHPShyzHDMfoOKmhnEqLn1wasFI26ipKuZeyNOQOKpTyFyFxg45PtWpMIolySSPSsm6mDsZFBGRgfQVdNdWTJ9hwcucdffpT8exqCH7vPYU/P+c05bgtj//QrxztGQTyM5xW1HKHUMO9YElaFmTtb8KgIhdxhAW3duBWPJzxWrqH3E+p/pWZJ981vBaEy3BXKggd6TzH9aYaKqwj/9k=',
        url_md: 'https://placehold.it/400x300',
        url_lg: 'http://gratisography.com/pictures/273_1.jpg',
        width: 800,
        height: 600,
        showHiRes: false,
        feedback: [[4, 20], [7, 30], [10, 40]]
      },
      '8': {
        mediaId: 8,
        userFeedbackId: 8,
        media: 'Media 8',
        title: 'Title 8',
        description: 'Description 8',
        tags: [],
        url_sm: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAGwAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAGwAoAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAHBwcHBwcMBwcMEQwMDBEXERERERcdFxcXFxcdIx0dHR0dHSMjIyMjIyMjKioqKioqMTExMTE3Nzc3Nzc3Nzc3P/bAEMBIiQkODQ4YDQ0YOacgJzm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5v/dAAQAA//aAAwDAQACEQMRAD8A2yc9cU3jFUftEvQqPwNJLIxQDgZ9al6FpF4E4wuKTCjnvVYTbRjFBmOPu0xFpgcYzTNvuaqmVjzt5+tJ5kn90fn/APWoA//QASDnNRSJiJmzk7s1YPQU3AZcNyKlMplYRuQCcA1KYm8rrzn09qdsTPQUMBt29s5xTuIaXkyMZ4p29/elRQMDtmrHlp6UrlH/2Q==',
        url_md: 'https://placehold.it/400x300',
        url_lg: 'http://gratisography.com/pictures/263_1.jpg',
        width: 400,
        height: 300,
        showHiRes: false,
        feedback: [[6, 20], [9, 30], [3, 40], [1, 50]]
      }
    },

    /*--------------------*/
    /*     DICTIONARY     */
    /*--------------------*/

    dictionary: {
      '1': 'beautiful',
      '2': 'cool',
      '3': 'awesome',
      '4': 'weird',
      '5': 'trippy',
      '6': 'nice',
      '7': 'great',
      '8': 'adorbs',
      '9': 'love',
      '10': 'dig'
    }
  }
}
