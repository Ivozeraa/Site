import tkinter as tk

class PenApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Caneta Mouse")
        self.root.geometry("800x600")

        self.canvas = tk.Canvas(self.root, bg="white")
        self.canvas.pack(fill=tk.BOTH, expand=True)

        self.color_choice = tk.StringVar()
        self.color_choice.set("red")

        color_options = ["red", "blue", "green", "black", "purple", ""]
        color_menu = tk.OptionMenu(self.root, self.color_choice, *color_options)
        color_menu.pack(side=tk.LEFT, padx=10, pady=10)

        clear_button = tk.Button(self.root, text="Limpar", command=self.clear_canvas)
        clear_button.pack(side=tk.LEFT, padx=10, pady=10)

        quit_button = tk.Button(self.root, text="Sair", command=self.root.quit)
        quit_button.pack(side=tk.LEFT, padx=10, pady=10)

        self.draw()

        self.prev_x, self.prev_y = None, None

    def draw(self):
        self.canvas.bind("<B1-Motion>", self.draw_line)
        self.canvas.bind("<ButtonRelease-1>", self.reset_prev_coords)

    def draw_line(self, event):
        x, y = event.x, event.y
        color = self.color_choice.get()
        if self.prev_x is not None and self.prev_y is not None:
            self.canvas.create_line(self.prev_x, self.prev_y, x, y, fill=color, width=2)
        self.prev_x, self.prev_y = x, y

    def reset_prev_coords(self, event):
        self.prev_x, self.prev_y = None, None

    def clear_canvas(self):
        self.canvas.delete("all")

if __name__ == "__main__":
    root = tk.Tk()
    app = PenApp(root)
    root.mainloop()
