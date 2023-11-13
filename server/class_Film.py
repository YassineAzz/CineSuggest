from imdb import Cinemagoer

ia = Cinemagoer()

class Film:

    def __init__(self, f_titre, f_id = 0, f_annee = 0, f_genre = '', f_duree = 0, f_note = 0, f_affiche = ''):
        self.id = f_id
        self.titre = f_titre
        self.annee = f_annee
        self.genre = f_genre
        self.duree = f_duree
        self.note = f_note
        self.affiche = f_affiche
    

        movie = ia.search_movie(self.titre)
        self.id = movie[0].getID()
        movie = ia.get_movie(self.id)
        self.titre = movie['title']
        self.annee = movie['year']
        self.genre = movie['genre']
        self.duree = movie['runtime']
        self.note = movie['rating']
        self.affiche = movie['full-size cover url']
    pass