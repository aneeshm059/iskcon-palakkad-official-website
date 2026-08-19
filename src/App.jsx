import React, { useEffect, useState } from "react";
import "./styles.css";

const IMG = {
  satsang: "/satsang.jpeg",
  guru: "https://naadopaasana.wordpress.com/wp-content/uploads/2022/06/38e08-guruvayurappan1.jpg",
  prabhupada: "https://www.iskconnagpur.org/assets/images/srila-prabhupada.jpg",
  kirtan:
    "https://www.iskconbangalore.org/wp-content/uploads/2016/05/g02-kirtans-1200x800.jpg",
  gita: "https://hkmmumbai.org/_next/static/media/gita-life.d4260417.jpg",
  community:
    "https://gosai.com/sites/default/files/images/23/09/377701603_702534538584232_5778359746006696775_n.jpg",
  festival:
    "https://haladharaswami.com/storage/cyYxUY4uCyfFW3b6DrMmhNxqgi4l6fZE2ccZmV3F.jpg",
  temple: "/temple-architecture.png",
  bg_class: "/bg_class.jpeg",
  youth_forum: "/youth_forum.jpeg",
  festival_img: "/festival.jpeg",
  community_img: "/community_img.jpeg",
  temple_icon: "/temple-icon.png",
};

const NAV = [
  ["About", "about"],
  ["Programs", "programs"],
  ["Learn", "learn"],
  ["Temple Project", "temple"],
  ["Media", "media"],
];

function go(id) {
  window.location.hash = id;
  window.scrollTo({ top: 0, behavior: "instant" });
}

function PageShell({ children, menuOpen, setMenuOpen }) {
  return (
    <>
      <div className="top">
        <div className="wrap topin">
          <span>ISKCON Palakkad · Kerala</span>
          <span>Hare Krishna</span>
        </div>
      </div>
      <nav>
        <div className="wrap navin">
          <button
            className="brand brand-button"
            onClick={() => {
              setMenuOpen(false);
              go("home");
            }}
            aria-label="ISKCON Palakkad home"
          >
            <span className="brandmark">
              <img src={IMG.temple_icon} alt="ISKCON Palakkad" />
            </span>
            <span>
              <b>ISKCON PALAKKAD</b>
              <small>International Society for Krishna Consciousness</small>
            </span>
          </button>
          <div className={`navlinks ${menuOpen ? "open" : ""}`}>
            {NAV.map(([label, id]) => (
              <button
                key={id}
                onClick={() => {
                  setMenuOpen(false);
                  go(id);
                }}
              >
                {label}
              </button>
            ))}
            <button
              className="donate"
              onClick={() => {
                setMenuOpen(false);
                go("donate");
              }}
            >
              Donate
            </button>
          </div>
          <button
            className="hamb"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </nav>
      {children}
      <MobileBar />
    </>
  );
}

function MobileBar() {
  return (
    <div className="mobilebar">
      <button onClick={() => go("home")}>
        <b>⌂</b>Home
      </button>
      <button onClick={() => go("programs")}>
        <b>◉</b>Programs
      </button>
      <button onClick={() => go("learn")}>
        <b>✦</b>Learn
      </button>
      <button onClick={() => go("temple")}>
        <b>♢</b>Temple
      </button>
      <button onClick={() => go("donate")}>
        <b>♥</b>Seva
      </button>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-photo" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">
            A living spiritual community in Palakkad
          </div>
          <h1>Discover the joy of Bhakti-yoga.</h1>
          <p>
            Come together for Sunday Satsang, Bhagavad-gita, joyful kirtan,
            festivals and a welcoming community — and discover a beautiful way
            to grow spiritually.
          </p>
          <div className="buttons">
            <button className="btn primary" onClick={() => go("satsang")}>
              Join Sunday Satsang
            </button>
            <button className="btn light" onClick={() => go("programs")}>
              Explore Our Programs
            </button>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="wrap hero-bottomin">
          <span className="pulse" />
          <strong>HAPPENING THIS WEEK</strong>
          <button onClick={() => go("satsang")}>Sunday Satsang</button>
          <button onClick={() => go("programs")}>Bhagavad-gita Study</button>
          <button onClick={() => go("programs")}>Outreach Programs</button>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const [showMoreActivities, setShowMoreActivities] = useState(false);
  return (
    <main id="home">
      <Hero />

      <section className="section cream" id="week">
        <div className="wrap">
          <div className="heading">
            <div>
              <div className="label">Discover something beautiful</div>
              <h2>Come. Feel. Discover.</h2>
            </div>
            <p>
              Experience joyful satsang, Bhagavad-gita, youth activities and
              festivals — all happening through the growing ISKCON Palakkad
              community.
            </p>
          </div>

          <div className="week">
            <article
              className="feature clickable"
              onClick={() => go("satsang")}
            >
              <img
                src={IMG.satsang}
                alt="Devotees participating in Sunday Satsang"
              />
              <div className="feature-content">
                <small>Every Sunday</small>
                <h3>Sunday Satsang</h3>
                <p>
                  Kirtan · Bhagavad-gita / Bhagavatam · Prasadam · Fellowship
                </p>
              </div>
            </article>

            <div className="sideevents">
              <article
                className="sideevent clickable"
                onClick={() => go("programs")}
              >
                <img src={IMG.bg_class} alt="Bhagavad-gita study" />
                <div>
                  <small>Weekly</small>
                  <h3>Bhagavad-gita Study</h3>
                </div>
              </article>
              <article
                className="sideevent clickable"
                onClick={() => go("youth")}
              >
                <img
                  src={IMG.youth_forum}
                  alt="Young people participating in a community gathering"
                />
                <div>
                  <small>For Young People</small>
                  <h3>Youth Forum</h3>
                </div>
              </article>
            </div>

            <div
              className={`sideevents festival-column ${showMoreActivities ? "expanded" : ""}`}
            >
              <article
                className="sideevent clickable festival-single"
                onClick={() => go("festivals")}
              >
                <img
                  src={IMG.festival_img}
                  alt="Devotional festival gathering"
                />
                <div>
                  <small>Celebrate With Us</small>
                  <h3>Festivals</h3>
                </div>
              </article>
              {showMoreActivities && (
                <article
                  className="sideevent clickable"
                  onClick={() => go("programs")}
                >
                  <img
                    src={IMG.community}
                    alt="ISKCON Palakkad outreach program"
                  />
                  <div>
                    <small>Across Palakkad</small>
                    <h3>Outreach Programs</h3>
                  </div>
                </article>
              )}
            </div>
          </div>

          <div className="see-more-wrap">
            <button
              className="see-more"
              onClick={() => setShowMoreActivities((v) => !v)}
            >
              {showMoreActivities ? "Show Less ↑" : "See More →"}
            </button>
          </div>
        </div>
      </section>

      <section className="section storyband">
        <div className="wrap story">
          <div className="story-visual">
            <div className="story-main">
              <img
                src={IMG.community_img}
                alt="Devotees gathered for a spiritual program"
              />
            </div>
            <div className="story-small">
              <img src={IMG.prabhupada} alt="Srila Prabhupada" />
            </div>
            <div className="story-circle">
              Join ISKCON
              <br />
              Palakkad
            </div>
          </div>
          <div className="story-copy">
            <div className="label">A spiritual community in Palakkad</div>
            <h2>More than a place. A community to belong to.</h2>
            <p>
              ISKCON Palakkad is a growing community that shares the timeless
              teachings of Lord Krishna through satsang, Bhagavad-gita study,
              outreach, festivals and devotional gatherings.
            </p>
            <div className="quote">
              A welcoming space where the joy of Bhakti-yoga brings people
              closer to Krishna and to one another.
            </div>
            <button className="btn btn-maroon" onClick={() => go("about")}>
              Discover ISKCON Palakkad
            </button>
          </div>
        </div>
      </section>

      <section className="section programs" id="programs">
        <div className="wrap">
          <div className="heading">
            <div>
              <div className="label">Find your way in</div>
              <h2>Begin with what speaks to you.</h2>
            </div>
            <p>
              Whether you are curious about Bhagavad-gita, looking for a joyful
              community, or simply want to experience a Satsang, there is a
              beautiful way to begin.
            </p>
          </div>
          <div className="programs-grid find-grid">
            <article
              className="visual large clickable"
              onClick={() => go("learn")}
            >
              <img src={IMG.gita} alt="Bhagavad-gita" />
              <div className="visual-content">
                <small>Curious about life?</small>
                <h3>Explore Bhagavad-gita</h3>
                <p>
                  Discover timeless wisdom and explore some of life's deeper
                  questions.
                </p>
                <strong>Explore →</strong>
              </div>
            </article>
            <article className="visual clickable" onClick={() => go("satsang")}>
              <img src={IMG.kirtan} alt="Sunday Satsang" />
              <div className="visual-content">
                <small>Looking for joy?</small>
                <h3>Join a Sunday Satsang</h3>
                <p>
                  Experience kirtan, spiritual wisdom, prasadam and the warmth
                  of devotees.
                </p>
                <strong>Discover Satsang →</strong>
              </div>
            </article>
            <article className="visual clickable" onClick={() => go("about")}>
              <img src={IMG.community} alt="ISKCON Palakkad community" />
              <div className="visual-content">
                <small>Looking for connection?</small>
                <h3>Meet the Community</h3>
                <p>
                  Discover a welcoming community exploring a joyful spiritual
                  way of life.
                </p>
                <strong>Meet the Community →</strong>
              </div>
            </article>
            <article
              className="visual wide clickable"
              onClick={() => go("contact")}
            >
              <img src={IMG.festival} alt="Devotees celebrating together" />
              <div className="visual-content">
                <small>Simply want to explore?</small>
                <h3>Visit ISKCON Palakkad</h3>
                <p>
                  Come as you are. Spend some time with us and experience it for
                  yourself.
                </p>
                <strong>Plan Your Visit →</strong>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="festival-home festival-home-light" id="festivals">
        <div className="wrap festival-light-inner">
          <div className="festival-light-intro">
            <div className="label">The festival season is here</div>
            <h2>Celebrate With Us.</h2>
          </div>

          <div className="festival-upcoming-label">Our Upcoming Festivals</div>

          <div className="festival-cards">
            <article className="festival-card">
              <div className="festival-card-image">
                <img src={IMG.kirtan} alt="Devotees celebrating together" />
              </div>
              <div className="festival-card-content">
                <h3>Balarama Jayanti</h3>
                <div className="festival-date">28 August 2026</div>
                <p>
                  Celebrate the appearance of Lord Balarama through devotion,
                  kirtan and joyful gatherings.
                </p>
              </div>
            </article>

            <article className="festival-card">
              <div className="festival-card-image">
                <img
                  src={IMG.festival}
                  alt="Devotees celebrating a Krishna festival"
                />
              </div>
              <div className="festival-card-content">
                <h3>Sri Krishna Janmashtami</h3>
                <div className="festival-date">4 September 2026</div>
                <p>
                  A joyful celebration of the appearance of Lord Krishna, filled
                  with devotion, kirtan and festive activities.
                </p>
              </div>
            </article>

            <article className="festival-card">
              <div className="festival-card-image">
                <img
                  src={IMG.community}
                  alt="Devotees gathered for a devotional celebration"
                />
              </div>
              <div className="festival-card-content">
                <h3>Radhastami</h3>
                <div className="festival-date">19 September 2026</div>
                <p>
                  A beautiful celebration honouring Srimati Radharani through
                  devotion, kirtan and loving remembrance.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="temple" id="temple">
        <div className="temple-bg" />
        <div className="wrap temple-inner">
          <div className="temple-copy">
            <div className="label">A new chapter for Palakkad</div>
            <h2>A sacred home for generations to come.</h2>
            <p>
              A beautiful vision for Palakkad is beginning to take shape — the
              Radha Krishna Bhakthi Yoga Mandiram, a place to experience
              devotion, wisdom, culture and community.
            </p>
            <div className="progress">
              <div className="pstep done">
                <div className="pdot">✓</div>
                <b>Land Acquired</b>
                <span>The journey has begun</span>
              </div>
              <div className="pstep done">
                <div className="pdot">2</div>
                <b>Approvals</b>
                <span>In progress</span>
              </div>
              <div className="pstep">
                <div className="pdot">3</div>
                <b>Construction</b>
                <span>Coming next</span>
              </div>
            </div>
            <button className="btn primary" onClick={() => go("temple")}>
              SEE WHAT WE ARE BUILDING →
            </button>
          </div>
          <div className="temple-art temple-art-final">
            <img
              className="temple-architecture"
              src={IMG.temple}
              alt="Architectural vision of the Radha Krishna Bhakthi Yoga Mandiram"
            />
            <div className="art-note">
              A sacred home envisioned for Palakkad.
            </div>
          </div>
        </div>
      </section>

      <section className="section media-section" id="media">
        <div className="wrap">
          <div className="heading">
            <div>
              <div className="label">Watch · Listen · Explore</div>
              <h2>Latest from ISKCON Palakkad.</h2>
            </div>
            <p>
              Discover talks, satsang moments, kirtans and stories from our
              growing community.
            </p>
          </div>
          <div className="media-grid">
            <article
              className="media-main clickable"
              onClick={() => go("media")}
            >
              <img src={IMG.kirtan} alt="Sunday Satsang video" />
              <span className="play">▶</span>
              <div className="media-copy">
                <small>Sunday Satsang</small>
                <h3>Explore our latest talks, kirtans and satsang moments.</h3>
              </div>
            </article>
            <div className="media-side">
              <article
                className="media-small clickable"
                onClick={() => go("media")}
              >
                <img src={IMG.gita} alt="Bhagavad-gita class" />
                <span className="play">▶</span>
                <div className="media-copy">
                  <small>Bhagavad-gita</small>
                  <h3>Wisdom for everyday life.</h3>
                </div>
              </article>
              <article
                className="media-small clickable"
                onClick={() => go("media")}
              >
                <img src={IMG.community} alt="Community gathering" />
                <div className="media-copy">
                  <small>Community</small>
                  <h3>Moments from our satsang.</h3>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section learn" id="learn">
        <div className="wrap">
          <div className="heading">
            <div>
              <div className="label">Explore Bhakti-yoga</div>
              <h2>Learn something that changes the way you see life.</h2>
            </div>
            <p>
              Begin with the questions that matter to you, and explore the
              wisdom of Bhagavad-gita at your own pace.
            </p>
          </div>
          <div className="learn-grid">
            <button className="learn-card" onClick={() => go("learn")}>
              <small>01 · Begin here</small>
              <h3>Who am I?</h3>
              <p>
                Explore the Vedic understanding of the self, consciousness and
                the purpose of human life.
              </p>
              <span>Discover →</span>
            </button>
            <button className="learn-card" onClick={() => go("learn")}>
              <small>02 · The wisdom</small>
              <h3>Why Bhagavad-gita?</h3>
              <p>
                Explore Krishna's answers to questions about happiness, action,
                identity and the search for lasting meaning.
              </p>
              <span>Explore →</span>
            </button>
            <button className="learn-card" onClick={() => go("learn")}>
              <small>03 · The path</small>
              <h3>What is Bhakti-yoga?</h3>
              <p>
                Discover a joyful path of developing our relationship with
                Krishna through hearing, chanting and remembrance.
              </p>
              <span>Learn →</span>
            </button>
          </div>
        </div>
      </section>

      <section className="section visit" id="visit">
        <div className="wrap visit-grid">
          <div className="visit-photo">
            <img src={IMG.kirtan} alt="ISKCON devotees gathering" />
          </div>
          <div className="visit-copy">
            <div className="label">Come and experience it</div>
            <h2>You're welcome here.</h2>
            <p>
              Whether you are curious, looking for spiritual wisdom, hoping to
              meet a welcoming community, or simply want to experience a Sunday
              Satsang — everyone is welcome at ISKCON Palakkad.
            </p>
            <div className="visit-details">
              <div className="detail">
                <b>📍 ISKCON Palakkad Centre</b>
                <span>Palakkad, Kerala</span>
              </div>
              <div className="detail">
                <b>🕐 Sunday Satsang</b>
                <span>Weekly · Check the latest program for timings</span>
              </div>
            </div>
            <button className="btn btn-saffron" onClick={() => go("contact")}>
              Visit & Contact
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

const Page = ({ title, kicker, intro, children, image }) => (
  <main className="inner-page">
    <section className="page-hero">
      <div
        className="page-hero-image"
        style={{
          backgroundImage: `linear-gradient(90deg, #25171adf, #25171a70), url(${image})`,
        }}
      />
      <div className="wrap page-hero-content">
        <div className="label">{kicker}</div>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
    <div className="page-body wrap">{children}</div>
  </main>
);

function AboutPage() {
  return (
    <Page
      title="ISKCON Palakkad"
      kicker="Who we are"
      intro="A growing spiritual community in Palakkad where people come together to experience Bhakti-yoga, learn from Bhagavad-gita, celebrate festivals and build meaningful spiritual friendships."
      image={IMG.community}
    >
      <div className="content-grid">
        <div>
          <h2>More than a place. A community to belong to.</h2>
          <p>
            ISKCON Palakkad is a local community connected with the
            International Society for Krishna Consciousness. We create welcoming
            opportunities to experience kirtan, explore spiritual wisdom,
            participate in devotional gatherings and spend meaningful time with
            devotees.
          </p>
          <p>
            Our activities include Sunday Satsang, Bhagavad-gita study, outreach
            programs, Youth Forum activities and festival celebrations in and
            around Palakkad. Everyone is welcome, whether you are completely new
            or already familiar with Bhakti-yoga.
          </p>
        </div>
        <aside className="info-card">
          <img src={IMG.prabhupada} alt="Srila Prabhupada" />
          <h3>Srila Prabhupada</h3>
          <p>
            ISKCON was founded by His Divine Grace A.C. Bhaktivedanta Swami
            Prabhupada, whose books and teachings are an important foundation of
            our spiritual education.
          </p>
        </aside>
      </div>
      <div className="feature-band">
        <div>
          <span>Our approach</span>
          <h2>Experience. Explore. Grow.</h2>
        </div>
        <p>
          We aim to make Bhakti-yoga approachable through joyful community
          gatherings, spiritual learning, kirtan, festivals and practical
          opportunities to explore devotional life.
        </p>
      </div>
      <h2>What you can expect</h2>
      <div className="simple-grid">
        <div>
          <b>Welcome</b>
          <p>No prior knowledge is required to attend our programs.</p>
        </div>
        <div>
          <b>Spiritual learning</b>
          <p>Explore Bhagavad-gita, Bhakti-yoga and devotional wisdom.</p>
        </div>
        <div>
          <b>Community</b>
          <p>Meet devotees and participate at a pace that feels comfortable.</p>
        </div>
        <div>
          <b>Youth & families</b>
          <p>
            Discover programs and gatherings designed for different stages of
            life.
          </p>
        </div>
      </div>
    </Page>
  );
}

function ProgramsPage() {
  return (
    <Page
      title="Programs & Activities"
      kicker="Come together"
      intro="Discover the ways ISKCON Palakkad brings people together for spiritual learning, joyful gatherings, outreach and community."
      image={IMG.kirtan}
    >
      <div className="program-detail-grid">
        <article>
          <img src={IMG.kirtan} alt="Sunday Satsang" />
          <div>
            <span>Every Sunday</span>
            <h2>Sunday Satsang</h2>
            <p>
              A welcoming weekly gathering with kirtan, a spiritual talk from
              Bhagavad-gita or Srimad Bhagavatam, interaction with devotees and
              prasadam.
            </p>
            <button onClick={() => go("satsang")} className="text-link">
              View Sunday Satsang →
            </button>
          </div>
        </article>
        <article>
          <img src={IMG.gita} alt="Bhagavad-gita study" />
          <div>
            <span>Weekly</span>
            <h2>Bhagavad-gita Study</h2>
            <p>
              Interactive study sessions led by experienced devotees, helping
              participants explore Krishna's teachings and their relevance to
              everyday life.
            </p>
          </div>
        </article>
        <article>
          <img src={IMG.community} alt="Outreach program" />
          <div>
            <span>Across Palakkad</span>
            <h2>Outreach Programs</h2>
            <p>
              Weekly Bhagavad-gita and spiritual discussions are conducted at
              different locations by senior devotees and volunteers.
            </p>
          </div>
        </article>
        <article>
          <img src={IMG.community} alt="Youth Forum" />
          <div>
            <span>For young people</span>
            <h2>Youth Forum</h2>
            <p>
              A focused youth initiative combining Bhakti-yoga, meaningful
              friendships, discussions, values and concentrated spiritual
              training.
            </p>
            <button onClick={() => go("youth")} className="text-link">
              Explore Youth Forum →
            </button>
          </div>
        </article>
        <article>
          <img src={IMG.festival} alt="Festival celebration" />
          <div>
            <span>Throughout the year</span>
            <h2>Festivals</h2>
            <p>
              Experience the colour, music, devotion and togetherness of
              Krishna's festivals with the community.
            </p>
            <button onClick={() => go("festivals")} className="text-link">
              See Festivals →
            </button>
          </div>
        </article>
      </div>
      <div className="cta-strip">
        <div>
          <span>Not sure where to start?</span>
          <h2>Come to a Sunday Satsang.</h2>
        </div>
        <button className="btn primary" onClick={() => go("satsang")}>
          See the Details
        </button>
      </div>
    </Page>
  );
}

function SatsangPage() {
  return (
    <Page
      title="Sunday Satsang"
      kicker="Every week in Palakkad"
      intro="Come together for kirtan, spiritual wisdom, prasadam and the warmth of devotees in a welcoming weekly gathering."
      image={IMG.kirtan}
    >
      <div className="content-grid">
        <div>
          <h2>Come and experience it for yourself.</h2>
          <p>
            Sunday Satsang is one of the simplest ways to experience the spirit
            of ISKCON Palakkad. You don't need prior knowledge or experience.
          </p>
          <ul className="clean-list">
            <li>
              <b>Kirtan</b>
              <span>
                Chant the Hare Krishna Mahamantra together in a joyful
                atmosphere.
              </span>
            </li>
            <li>
              <b>Spiritual wisdom</b>
              <span>
                Hear practical insights from Bhagavad-gita or Srimad Bhagavatam.
              </span>
            </li>
            <li>
              <b>Interaction</b>
              <span>
                Spend time with devotees, ask questions and get to know the
                community.
              </span>
            </li>
            <li>
              <b>Prasadam</b>
              <span>
                Share sanctified vegetarian food in a warm and welcoming
                setting.
              </span>
            </li>
          </ul>
        </div>
        <aside className="info-card highlight">
          <span>Every Sunday</span>
          <h3>Join the next gathering</h3>
          <p>
            For the latest timing and location, please contact ISKCON Palakkad
            or check our current program announcement.
          </p>
          <button className="btn btn-saffron" onClick={() => go("contact")}>
            Contact Us
          </button>
        </aside>
      </div>
    </Page>
  );
}

function LearnPage() {
  return (
    <Page
      title="Explore Bhakti-yoga"
      kicker="Begin with questions"
      intro="Explore approachable introductions to Bhagavad-gita, Bhakti-yoga and the timeless questions that make us look deeper at life."
      image={IMG.gita}
    >
      <div className="article-list">
        <article>
          <span>01 · The self</span>
          <h2>Who am I?</h2>
          <p>
            Explore the Vedic understanding of the self, consciousness and the
            purpose of human life.
          </p>
        </article>
        <article>
          <span>02 · The wisdom</span>
          <h2>Why Bhagavad-gita?</h2>
          <p>
            Explore Krishna's conversation with Arjuna and its insights on
            happiness, identity, action and meaning.
          </p>
        </article>
        <article>
          <span>03 · The path</span>
          <h2>What is Bhakti-yoga?</h2>
          <p>
            Discover a path of developing our relationship with Krishna through
            hearing, chanting, remembrance and devotional practice.
          </p>
        </article>
        <article>
          <span>04 · The practice</span>
          <h2>Why chant Hare Krishna?</h2>
          <p>
            Discover the simple devotional practice of chanting the Hare Krishna
            Mahamantra and why it is central to Bhakti-yoga.
          </p>
        </article>
      </div>
      <div className="cta-strip">
        <div>
          <span>Want to learn with others?</span>
          <h2>Join a Bhagavad-gita study program.</h2>
        </div>
        <button className="btn primary" onClick={() => go("programs")}>
          Explore Programs
        </button>
      </div>
    </Page>
  );
}

function TemplePage() {
  return (
    <Page
      title="Radha Krishna Bhakthi Yoga Mandiram"
      kicker="A new chapter for Palakkad"
      intro="A beautiful temple vision for Palakkad is beginning to take shape. Land has been acquired and the project is progressing through the required approval process."
      image={IMG.temple}
    >
      <div className="content-grid">
        <div>
          <h2>A sacred home for generations to come.</h2>
          <p>
            The Radha Krishna Bhakthi Yoga Mandiram is envisioned as a place
            where people can experience devotion, wisdom, culture and community
            — a home for Bhakti-yoga in Palakkad.
          </p>
          <p>
            The land has been acquired. The project is currently progressing
            through the required approvals, with construction to follow. This is
            an ongoing journey, and we look forward to sharing each step as the
            vision takes shape.
          </p>
        </div>
        <aside className="info-card">
          <img
            src={IMG.temple}
            alt="Radha Krishna Bhakthi Yoga Mandiram architectural vision"
          />
          <h3>Project journey</h3>
          <div className="page-progress">
            <b>✓ Land acquired — the journey has begun</b>
            <b>02 · Approvals — in progress</b>
            <b>03 · Construction — coming next</b>
          </div>
        </aside>
      </div>
      <div className="feature-band">
        <div>
          <span>The vision</span>
          <h2>
            A place to experience devotion, wisdom, culture and community.
          </h2>
        </div>
        <p>
          The temple project is part of the wider ISKCON Palakkad community
          journey. It will complement the satsang, learning, outreach, youth and
          festival activities already happening today.
        </p>
      </div>
      <div className="cta-strip">
        <div>
          <span>Follow the journey</span>
          <h2>See what we're building.</h2>
        </div>
        <button className="btn primary" onClick={() => go("donate")}>
          Support Seva
        </button>
      </div>
    </Page>
  );
}

function YouthPage() {
  return (
    <Page
      title="Youth Forum"
      kicker="For young people"
      intro="A focused space for young people to explore Bhakti-yoga, build meaningful friendships and grow through concentrated spiritual training."
      image={IMG.community}
    >
      <div className="content-grid">
        <div>
          <h2>Grow with purpose. Connect with like-minded people.</h2>
          <p>
            Youth Forum is designed especially for young people who want to
            explore spiritual life in a practical, engaging and supportive
            environment.
          </p>
          <p>
            Through focused training, discussions, activities, Bhakti-yoga
            practices and friendship, participants get an opportunity to explore
            timeless wisdom while navigating modern life.
          </p>
        </div>
        <aside className="info-card">
          <img
            src={IMG.community}
            alt="Young people in a community gathering"
          />
          <h3>A space to grow</h3>
          <p>
            For current schedules and participation details, contact ISKCON
            Palakkad.
          </p>
          <button className="btn btn-saffron" onClick={() => go("contact")}>
            Ask About Youth Forum
          </button>
        </aside>
      </div>
    </Page>
  );
}

function FestivalsPage() {
  return (
    <Page
      title="Festivals"
      kicker="Celebrate with us"
      intro="Experience the colour, music, devotion and togetherness of Krishna's festivals with the ISKCON Palakkad community."
      image={IMG.festival}
    >
      <div className="feature-band">
        <div>
          <span>Coming up</span>
          <h2>Janmashtami</h2>
        </div>
        <p>
          A night of devotion, music and celebration. Join the community as we
          come together to celebrate the appearance of Lord Krishna.
        </p>
      </div>
      <div className="simple-grid">
        <div>
          <b>Balarama Jayanti</b>
          <p>Celebrate the appearance of Lord Balarama with the community.</p>
        </div>
        <div>
          <b>Janmashtami</b>
          <p>
            A joyful celebration filled with kirtan, devotion and togetherness.
          </p>
        </div>
        <div>
          <b>Radhastami</b>
          <p>
            Experience a beautiful celebration centred on Srimati Radharani.
          </p>
        </div>
        <div>
          <b>More celebrations</b>
          <p>
            Explore the devotional calendar and join special gatherings
            throughout the year.
          </p>
        </div>
      </div>
    </Page>
  );
}

function MediaPage() {
  return (
    <Page
      title="Media & Satsang"
      kicker="Watch · Listen · Explore"
      intro="Follow talks, kirtans, Satsang moments and community stories from ISKCON Palakkad's digital channels."
      image={IMG.kirtan}
    >
      <div className="media-page-grid">
        <article className="media-feature">
          <img src={IMG.kirtan} alt="Satsang" />
          <div>
            <span>Sunday Satsang</span>
            <h2>Watch our latest spiritual talks and kirtans.</h2>
            <p>
              Our digital channels share Satsang lectures, short reflections,
              kirtans and community highlights.
            </p>
          </div>
        </article>
        <div className="media-links">
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <span>YouTube</span>
            <b>Watch ISKCON Palakkad →</b>
          </a>
          <a href="#media">
            <span>Shorts & Reels</span>
            <b>Explore bite-sized wisdom →</b>
          </a>
          <a href="#media">
            <span>Photo Gallery</span>
            <b>See community moments →</b>
          </a>
        </div>
      </div>
    </Page>
  );
}

function GetInvolvedPage() {
  return (
    <Page
      title="Get Involved"
      kicker="There is a place for everyone"
      intro="Once you feel connected, there are many ways to participate — from attending programs to volunteering and supporting the community."
      image={IMG.community}
    >
      <div className="simple-grid large">
        <div>
          <b>Attend</b>
          <h3>Join a program</h3>
          <p>Start with Sunday Satsang or a Bhagavad-gita study program.</p>
        </div>
        <div>
          <b>Volunteer</b>
          <h3>Offer your time</h3>
          <p>
            Support events, outreach, media, hospitality and other community
            activities.
          </p>
        </div>
        <div>
          <b>Outreach</b>
          <h3>Share the wisdom</h3>
          <p>
            Help make Bhagavad-gita and spiritual learning accessible to more
            people.
          </p>
        </div>
        <div>
          <b>Seva</b>
          <h3>Support the journey</h3>
          <p>
            Contribute according to your interest and ability to the community
            and temple vision.
          </p>
        </div>
      </div>
      <div className="cta-strip">
        <div>
          <span>Ready to participate?</span>
          <h2>Tell us how you'd like to get involved.</h2>
        </div>
        <button className="btn primary" onClick={() => go("contact")}>
          Contact Us
        </button>
      </div>
    </Page>
  );
}

function DonatePage() {
  return (
    <Page
      title="Support Seva"
      kicker="Offer your contribution"
      intro="Your support helps ISKCON Palakkad conduct spiritual programs, outreach, educational activities, community initiatives and the development of the Radha Krishna Bhakthi Yoga Mandiram."
      image={IMG.temple}
    >
      <div className="donate-grid">
        <article>
          <span>Community</span>
          <h2>General Seva</h2>
          <p>
            Support ongoing spiritual programs and community activities in
            Palakkad.
          </p>
          <button className="btn primary">Donate</button>
        </article>
        <article>
          <span>Future</span>
          <h2>Temple Project</h2>
          <p>
            Support the development of the proposed Radha Krishna Bhakthi Yoga
            Mandiram.
          </p>
          <button className="btn primary">Support the Project</button>
        </article>
        <article>
          <span>Education</span>
          <h2>Books & Outreach</h2>
          <p>
            Help share Bhagavad-gita and spiritual education through outreach
            activities.
          </p>
          <button className="btn primary">Support Outreach</button>
        </article>
      </div>
      <div className="notice">
        <b>Online contributions</b>
        <p>
          Online contribution facilities will be provided through our authorised
          payment gateway. Please review the Terms, Privacy, Cancellation &
          Refund and other policies before making a contribution.
        </p>
      </div>
    </Page>
  );
}

function ContactPage() {
  return (
    <Page
      title="Contact & Visit Us"
      kicker="We'd love to welcome you"
      intro="Find the ISKCON Palakkad centre, ask about programs, or get in touch about volunteering and devotional activities."
      image={IMG.community}
    >
      <div className="contact-grid">
        <div>
          <h2>Come and experience it.</h2>
          <p>
            <b>Centre address</b>
            <br />
            [Enter the complete physical centre address]
            <br />
            Palakkad, Kerala, India
          </p>
          <p>
            <b>Phone</b>
            <br />
            [Enter official contact number]
          </p>
          <p>
            <b>Email</b>
            <br />
            [Enter official email address]
          </p>
          <p>
            <b>Programs</b>
            <br />
            Sunday Satsang and other weekly activities. Please contact us for
            the current schedule and directions.
          </p>
        </div>
        <div className="info-card">
          <h3>First time visiting?</h3>
          <p>
            You do not need prior knowledge or experience. Come as you are,
            attend a program and discover more at your own pace.
          </p>
          <button className="btn btn-saffron" onClick={() => go("satsang")}>
            See Sunday Satsang
          </button>
        </div>
      </div>
      <div className="compliance-note">
        <b>For payments and official correspondence</b>
        <p>
          Please use the registered legal/entity name and the official phone,
          email and physical address shown on the final published version of
          this page.
        </p>
      </div>
    </Page>
  );
}

function PolicyPage({ title, kicker, intro, children }) {
  return (
    <Page title={title} kicker={kicker} intro={intro} image={IMG.community}>
      <div className="policy">{children}</div>
    </Page>
  );
}

function Policies({ page }) {
  if (page === "privacy")
    return (
      <PolicyPage
        title="Privacy Policy"
        kicker="Website policy"
        intro="How ISKCON Palakkad handles information shared through this website."
      >
        <h2>Privacy Policy</h2>
        <p>
          We respect your privacy. This policy should be updated with the final
          legal/entity details before publication.
        </p>
        <h3>Information we may receive</h3>
        <p>
          We may receive information you voluntarily provide through contact
          forms, registrations, contribution forms or communications, such as
          your name, email address, phone number and message.
        </p>
        <h3>How information is used</h3>
        <p>
          Information may be used to respond to enquiries, communicate about
          programs or seva, maintain records required for administration, and
          process authorised contributions. Payment credentials are handled by
          the payment gateway and are not stored by this website.
        </p>
        <h3>Sharing</h3>
        <p>
          We may share information with service providers only where necessary
          to provide the requested service or meet legal obligations. We do not
          sell personal information.
        </p>
        <h3>Contact</h3>
        <p>For privacy questions, contact [official email address].</p>
      </PolicyPage>
    );
  if (page === "terms")
    return (
      <PolicyPage
        title="Terms & Conditions"
        kicker="Website policy"
        intro="Terms governing use of the ISKCON Palakkad website and online contribution facilities."
      >
        <h2>Terms & Conditions</h2>
        <p>
          By using this website, you agree to use it lawfully and respectfully.
          Information about programs, schedules and activities may change and
          should be confirmed with ISKCON Palakkad where necessary.
        </p>
        <h3>Online contributions</h3>
        <p>
          Where enabled, online contributions are processed through an
          authorised payment gateway. Donors should review the applicable
          contribution, cancellation and refund information before completing
          payment.
        </p>
        <h3>Content</h3>
        <p>
          Website text, images, videos and other materials are provided for
          informational and devotional purposes. Unauthorised commercial
          reproduction may be restricted.
        </p>
        <h3>Contact</h3>
        <p>
          For questions about these terms, contact [official email address].
        </p>
      </PolicyPage>
    );
  if (page === "refund")
    return (
      <PolicyPage
        title="Cancellation & Refund Policy"
        kicker="Website policy"
        intro="Information about cancellations and refunds for online contributions."
      >
        <h2>Cancellation & Refund Policy</h2>
        <p>
          Contributions are voluntary. If a payment is made in error or a refund
          request is otherwise eligible under our policy, please contact us
          promptly with the transaction/reference details.
        </p>
        <h3>How to request a refund</h3>
        <p>
          Email [official email address] or contact [official phone number] with
          the donor name, date, amount and payment/reference ID. We will review
          the request and respond according to the applicable policy and
          payment-gateway process.
        </p>
        <h3>Processing</h3>
        <p>
          Approved refunds are processed through the payment method or gateway
          used for the original transaction. Bank or payment-provider timelines
          may apply.
        </p>
      </PolicyPage>
    );
  if (page === "pricing")
    return (
      <PolicyPage
        title="Contribution Information"
        kicker="Payment information"
        intro="Clear information about what online contributions on this website represent."
      >
        <h2>Contribution Information</h2>
        <p>
          This website is primarily intended for voluntary contributions and
          seva support. We do not currently sell products or paid services
          through the donation flow.
        </p>
        <h3>Contribution amounts</h3>
        <p>
          Where a donor chooses an amount online, the amount is selected by the
          donor or presented as a suggested seva amount. A contribution is not a
          purchase of a physical product or guaranteed service.
        </p>
        <h3>Purpose</h3>
        <p>
          Contributions may support spiritual programs, outreach, educational
          activities, community initiatives and the Radha Krishna Bhakthi Yoga
          Mandiram project, subject to the stated purpose of the contribution.
        </p>
      </PolicyPage>
    );
  if (page === "shipping")
    return (
      <PolicyPage
        title="Shipping Policy"
        kicker="Website policy"
        intro="Shipping information for transparency during payment-gateway review."
      >
        <h2>Shipping Policy</h2>
        <p>
          ISKCON Palakkad does not currently use this website to sell or ship
          physical products. Online contributions are not purchases of physical
          goods and therefore do not involve shipping.
        </p>
        <p>
          If physical products such as books or merchandise are offered for
          online purchase in the future, the applicable delivery terms,
          locations, charges and timelines will be published before payment is
          accepted.
        </p>
      </PolicyPage>
    );
  return null;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState(
    window.location.hash.replace("#", "") || "home",
  );

  useEffect(() => {
    const onHash = () => {
      setPage(window.location.hash.replace("#", "") || "home");
      setMenuOpen(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  let content;
  if (page === "home") content = <Home />;
  else if (page === "about") content = <AboutPage />;
  else if (page === "programs") content = <ProgramsPage />;
  else if (page === "satsang") content = <SatsangPage />;
  else if (page === "learn") content = <LearnPage />;
  else if (page === "temple") content = <TemplePage />;
  else if (page === "youth") content = <YouthPage />;
  else if (page === "festivals") content = <FestivalsPage />;
  else if (page === "media") content = <MediaPage />;
  else if (page === "get-involved") content = <GetInvolvedPage />;
  else if (page === "donate") content = <DonatePage />;
  else if (page === "contact") content = <ContactPage />;
  else if (["privacy", "terms", "refund", "shipping", "pricing"].includes(page))
    content = <Policies page={page} />;
  else content = <Home />;

  return (
    <div className="app">
      <PageShell menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
        {content}
      </PageShell>
      <footer id="support">
        <div className="wrap">
          <div className="footgrid">
            <div>
              <div className="brand">
                <span className="brandmark">ॐ</span>
                <span>
                  <b className="footer-brand-name">ISKCON PALAKKAD</b>
                  <small className="footer-brand-sub">Hare Krishna</small>
                </span>
              </div>
              <p>
                Sharing the timeless wisdom of Lord Krishna through Bhakti-yoga,
                Satsang, spiritual learning, festivals and community activities
                in Palakkad.
              </p>
            </div>
            <div>
              <h4>Discover</h4>
              <button onClick={() => go("about")}>About Us</button>
              <button onClick={() => go("programs")}>Programs</button>
              <button onClick={() => go("learn")}>Learn</button>
              <button onClick={() => go("media")}>Media</button>
            </div>
            <div>
              <h4>Get Involved</h4>
              <button onClick={() => go("youth")}>Youth Forum</button>
              <button onClick={() => go("get-involved")}>Volunteer</button>
              <button onClick={() => go("festivals")}>Festivals</button>
              <button onClick={() => go("temple")}>Temple Project</button>
            </div>
            <div>
              <h4>Support & Policies</h4>
              <button onClick={() => go("donate")}>Donate</button>
              <button onClick={() => go("contact")}>Contact Us</button>
              <button onClick={() => go("privacy")}>Privacy Policy</button>
              <button onClick={() => go("terms")}>Terms & Conditions</button>
              <button onClick={() => go("refund")}>
                Cancellation & Refund
              </button>
              <button onClick={() => go("shipping")}>Shipping Policy</button>
              <button onClick={() => go("pricing")}>
                Contribution Information
              </button>
            </div>
          </div>
          <div className="footbottom">
            <span>© 2026 ISKCON Palakkad</span>
            <span>Hare Krishna 🙏</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
