# importing webbrowser module
import webbrowser
# importing all files from tkinter module
from tkinter import *

# creating root
root = Tk()
# setting GUI title
root.title("Our Sites")
# setting GUI geometry
root.geometry("1920x1080")



# function to open linkedin in browser
def anihubxh():
    webbrowser.open("https://anihubx.github.io")
# function to open facebook in browser
def anihubxd():
    webbrowser.open("https://anihubx.github.io/donuts.html")
# function to open twitter in browser
def anihubxt():
    webbrowser.open("https://anihubx.github.io/team.html")
# function to open youtube in browser
def ff():
    webbrowser.open("https://filmfanatics.github.io")
# function to open whatsapp web in browser
def ffau():
    webbrowser.open("https://filmfanatics.github.io/aboutus.html")
# function to open instagram in browser
def instagram():
    webbrowser.open("www.instagram.com")
# function to open gmail in browser
def gmail():
    webbrowser.open("www.gmail.com")

Label(root, text="Welcome To Our \nWebsites", font="Helvtica 25 bold").pack()
Label(root,text="Click on the buttons to open website",font="LUCIDA").pack()
#creating button for each functions
# button to call linkedin function
mylinkedin = Button(root,text="AniHubX Home Page", command=anihubxh,font="LUCIDA 15 bold").pack(padx=20,pady=20)
# button to call facebook function
myfacebook = Button(root, text="AniHubX Donuts Page", command=anihubxd,font="LUCIDA 15 bold").pack(padx=20,pady=20)
# button to call twitter  function
mytwitter = Button(root, text="AniHubX Teams Page", command=anihubxt,font="LUCIDA 15 bold").pack(padx=20,pady=20)
# button to call youtube  function
myyoutube = Button(root, text="Film Fanatics Home Page", command=ff,font="LUCIDA 15 bold").pack(padx=20,pady=20)
# button to call whatsappweb  function
mywhatsapp = Button(root, text="Film Fanatics Teams Page", command=ffau,font="LUCIDA 15 bold").pack(padx=20,pady=20)
# button to call instagram  function
myinstagram = Button(root, text="Instagram", command=instagram,font="LUCIDA 15 bold").pack(padx=20,pady=20)
# button to call gmail  function
mygmail= Button(root, text="GMAIL" , command=gmail,font="LUCIDA 15 bold").pack(padx=20,pady=20)

#running the mainloop()
root.mainloop()
