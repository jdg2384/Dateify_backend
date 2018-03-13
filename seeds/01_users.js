
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      // return knex('users').insert([
      //   {
      //     id: 1, 
      //     name: 'Patrick',
      //     spotify_id: 30,
      //     age: 24,
      //     gender: 'male',
      //     photo: 'http://placekitten.com/200/300',
      //     age_range: '20-30',
      //     radius: 30,
      //     desired_gender: 'female',
      //     top_tracks: {
      //       beetles: 'hello',
      //       fish: 'some weird fish song',
      //       fake_artist: 'fake_artist greatest hits',

      //     },
      //     top_artists: {
      //       beetles: 'beetles',
      //       fish: 'fish',
      //       fake_artist: 'fake_artist',
      //     },
      //     thumbs_down: [],
      //   },
      //   {
      //     id: 2, 
      //     name: 'Betty',
      //     spotify_id: 98,
      //     age: 24,
      //     gender: 'Female',
      //     photo: 'http://placekitten.com/200/300',
      //     age_range: '20-30',
      //     radius: 30,
      //     desired_gender: 'male',
      //     top_tracks: {
      //       beetles: 'hello',
      //       fish: 'some weird fish song',
      //       fake_artist: 'fake_artist greatest hits',

      //     },
      //     top_artists: {
      //       beetles: 'beetles',
      //       fish: 'fish',
      //       fake_artist: 'fake_artist',
      //     },
      //   },
      //   {
      //     id: 3, 
      //     name: 'jimbo',
      //     spotify_id: 38,
      //     age: 24,
      //     gender: 'male',
      //     photo: 'http://placekitten.com/200/300',
      //     age_range: '20-30',
      //     radius: 30,
      //     desired_gender: 'male',
      //     top_tracks: {
      //       beetles: 'hello',
      //       fish: 'some weird fish song',
      //       fake_artist: 'fake_artist greatest hits',

      //     },
      //     top_artists: {
      //       beetles: 'beetles',
      //       fish: 'fish',
      //       fake_artist: 'fake_artist',
      //     },
      //     thumbs_down: {
      //       id: 3,
      //       id: 4,
      //     },
      //   },
      //   {
      //     id: 4, 
      //     name: 'Bobert',
      //     spotify_id: 98,
      //     age: 29,
      //     gender: 'female',
      //     photo: 'http://placekitten.com/200/300',
      //     age_range: '20-30',
      //     radius: 30,
      //     desired_gender: 'male',
      //     top_tracks: {
      //       beetles: 'hello',
      //       fish: 'some weird fish song',
      //       fake_artist: 'fake_artist greatest hits',

      //     },
      //     top_artists: {
      //       beetles: 'beetles',
      //       fish: 'fish',
      //       fake_artist: 'fake_artist',
      //     },
      //   }
      // ]);
    });
};


