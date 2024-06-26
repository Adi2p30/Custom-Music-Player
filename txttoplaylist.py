import os
import ssl
from pytube import YouTube, Search

ssl._create_default_https_context = ssl._create_stdlib_context

def convert_text_to_playlist(file_name):
    imglist = []
    songslist = []
    artistlist = []
    with open(file_name, "r") as f:
        lines = f.readlines()
    songs = [line.strip().split(" - ") for line in lines]
    for song in songs:
        if len(song) == 2:
            artist, title = song  # Swap artist and title since title comes after "-"
            download_song(title.strip(), artist.strip(), imglist) # Strip whitespace
            songslist.append(title)
            artistlist.append(artist)
        else:
            print(f"Invalid song format: {song}")
    makemusic_list(songslist, artistlist, imglist)

def download_song(title, artist, imglist):
    query = f'"topic" {artist} {title}'
    try:
        search_results = Search(query).results
        if not search_results:
            print(f"No results found for: {title} - {artist}")
            return

        yt = search_results[0]
        imglist.append(yt.thumbnail_url)
        stream = yt.streams.filter(only_audio=True).first()
        if stream is None:
            print(f"No audio stream available for: {title} - {artist}")

        download_dir = os.path.join("music")
        os.makedirs(download_dir, exist_ok=True)
        audio_file_path = os.path.join(download_dir, f"{title.replace(' ', '_')}.mp3")

        stream.download(output_path=download_dir, filename=f"{title.replace(' ', '_')}.mp3")
        print(f"Downloaded: {artist} - {title}")

    except Exception as e:
        print(f"Error downloading {title} - {artist}: {e}")

def makemusic_list(songslist, artistlist, imglist):
    # Check if the length of songs list, artist list, and img list are the same
    if len(songslist) != len(artistlist) or len(songslist) != len(imglist):
        print("Error: Length of songs list, artist list, and img list must be the same")
        return

    with open("music-list.js", "w") as f:
        f.write("let allMusic = [\n")
        for i, song in enumerate(songslist):
            title = song
            artist = artistlist[i]
            img = imglist[i]

            f.write(f"  {{\n")
            f.write(f'    name: "{song}",\n')
            f.write(f'    artist: "{artist}",\n')
            f.write(f'    img: "{img}",\n')  # Write the image URL
            f.write(f'    src: "{title.replace(" ", "_")}.mp3"\n')
            f.write(f"  }},\n")

        f.write("];\n")

if __name__ == "__main__":
    convert_text_to_playlist("songs.txt")
