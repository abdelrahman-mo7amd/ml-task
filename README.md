# CS Club Analytics Report

I organized 160 events. I also analyzed them. Yes, both. You're welcome.

---

## What This Is

A full data analysis of the CS Club's 2025 event season, attendance, ratings, difficulty, efficiency, and a handful of uncomfortable truths about our Quantum Computing program.

The project produces charts, a summary report, and a website that presents the findings in a way that doesn't make your eyes bleed.

---

## The Stack

- **Python** — pandas, numpy, matplotlib, seaborn
- **HTML / CSS / JavaScript**, Chart.js for the two charts that actually needed to be charts
- **Data** — one CSV file, 160 rows, no missing values (I checked)

---

## Project Structure

```
cs-club-analytics/
├── data.csv                  the raw event data
├── simple_analysis.py        all the analysis, every question answered
├── cs_club_website.html      the report as a website
└── README.md                 this file
```

---

## How to Run It

Make sure Python is installed. Then:

```bash
pip install pandas numpy matplotlib seaborn
```
Then Run the cells in ```main.ipynb```
That is it. It reads `data.csv`, answers all 9 questions, prints the results, and saves 10 charts to the same folder.

To view the website, just open `index.html` in a browser. No server needed. No npm install. No existential crisis.

---

## What the Analysis Covers

Nine data questions about topics, attendance, ratings, difficulty, and efficiency. Five strategic questions about what the club should actually do next semester. One very clear answer that the data kept repeating until I had to listen to it.

---

## The Findings, Summarized Ruthlessly

Generative AI is the best-performing topic by almost every measure. Web Development fills the room. Machine Learning is quietly solid. Quantum Computing is running every single event at maximum difficulty and then acting surprised when only 39 people show up.

Workshops are rated highest. Contests draw the biggest crowds. Talks are neither, yet somehow we kept scheduling them all year.

The sweet spot for difficulty is level 3. Not 2, not 5. Three. The data said this clearly and repeatedly.

---

## The One Thing Missing from the Data

We have no registration numbers. We only know who showed up, not who signed up and then decided their bed was more important. One extra column would tell us whether our problem is marketing or follow-through. Currently, we cannot tell. This bothers me.

---

## Who Made This

The event organizer. Also the analyst. Also the person who will be presenting this to a committee who definitely did not read the report beforehand.

---

## License

Open source. Use it, adapt it, just maybe fix the Quantum Computing events before you do.
