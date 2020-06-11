# Favorite Songs

*I love music. This is for collecting my favorite songs.*
This is a RESTful api that returns a collection of my favorite songs and some details about them in JSON. 

## Schema
The only requirements are Title and Artist

```
{
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  album: {
    type: String,
    default: null
  },
  year_released: {
    type: String,
    default: null
  },
  good_for: {
    type: String,
    default: null
  },
  genre: {
    type: String,
    default: null
  },
  spotify_link: {
    type: String, 
    default: null
  },
  apple_music_link: {
    type: String, 
    default: null
  }
}
```

## Starting
**With Node**
Clone ```bash npm install ``` and ```bash node index.js ``` from working directory

**With Docker**
Clone and navigate to directory. 
```bash docker build -t [name] .``` to build
```bash docker run --name [name] -p 5000:5000 -d [name]:latest```


