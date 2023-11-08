from imdb import Cinemagoer
import urllib
from urllib import request

ia = Cinemagoer()



selected_genre = 'Horreur' #Récuperer la variable
genre = ['Action', 'Comedie', 'Drame', 'Science-fiction', 'Horreur', 'Romance', 'Aventure', 'Animation', 'Documentaire', 'Fantastique', 'Mystère', 'Thriller', 'Crime', 'Western', 'Guerre']

#print(ia.get_top50_movies_by_genres(genres='Horreur'))



for i in range(len(genre)):
    if genre[i] == selected_genre:
        for j in range(50):
            movie = ia.get_top50_movies_by_genres(genres = selected_genre)
            year = int(movie['year'])
            rating = movie['rating']
            print(f'{movie} - {year}')
            print(f'rating : {rating}')
    else : i+=1

# keywords = ia.search_movie('football')

# for movie in keywords:
#     id = movie.getID()
#     movie = ia.get_movie(id)
#     year = movie['year']
#     rating = movie['rating']
#     print(f'{movie} - {year}')
#     print(f'rating : {rating}')
#     print(f'id : {id}')


