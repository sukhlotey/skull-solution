import { useState } from "react";
import review1 from "../assets/review1.jpg";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const MONTH_SHORT = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

const WEEKDAY_NAMES = ["M", "T", "W", "T", "F", "S", "S"];

const SERVICES_OPTIONS = [
  "SEO Services",
  "Social Media",
  "Email Marketing",
  "Content Creation",
  "Brand Strategy",
  "Paid Ads"
];

const TIME_SLOTS = ["09:30 AM", "11:00 AM", "02:30 PM", "04:00 PM"];

const BUDGET_OPTIONS = ["$5k - $10k", "$10k - $25k", "$25k+"];

const Appointment = () => {
  const todayDate = new Date();

  // Calendar Month & Year view state (defaults to current date)
  const [viewYear, setViewYear] = useState(todayDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(todayDate.getMonth());

  // Selected date state (defaults to current active date)
  const [selectedDate, setSelectedDate] = useState({
    day: todayDate.getDate(),
    month: todayDate.getMonth(),
    year: todayDate.getFullYear()
  });

  // Selected audit interest areas (multi-select)
  const [selectedServices, setSelectedServices] = useState([
    "SEO Services",
    "Social Media"
  ]);

  // Selected time slot
  const [selectedSlot, setSelectedSlot] = useState("11:00 AM");

  // Email state
  const [email, setEmail] = useState("");

  // Selected budget range
  const [selectedBudget, setSelectedBudget] = useState("$10k - $25k");

  // Submission feedback toast state
  const [submitted, setSubmitted] = useState(false);

  // Toggle service selection
  const handleToggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  // Navigate calendar to previous month
  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((prev) => prev - 1);
    } else {
      setViewMonth((prev) => prev - 1);
    }
  };

  // Navigate calendar to next month
  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((prev) => prev + 1);
    } else {
      setViewMonth((prev) => prev + 1);
    }
  };

  // Generate calendar days for current viewMonth & viewYear
  const generateCalendarDays = () => {
    const days = [];

    // First day of current view month
    const firstDay = new Date(viewYear, viewMonth, 1);
    const jsDay = firstDay.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
    // Monday-based start index (Mon=0, Tue=1, Wed=2, Thu=3, Fri=4, Sat=5, Sun=6)
    const startOffset = (jsDay + 6) % 7;

    // Total days in current month & previous month
    const daysInCurrentMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

    // 1. Trailing days from previous month
    for (let i = startOffset - 1; i >= 0; i--) {
      const dayNum = daysInPrevMonth - i;
      const prevMonth = viewMonth === 0 ? 11 : viewMonth - 1;
      const prevYear = viewMonth === 0 ? viewYear - 1 : viewYear;
      days.push({
        day: dayNum,
        month: prevMonth,
        year: prevYear,
        isCurrentMonth: false
      });
    }

    // 2. Days of current month
    for (let d = 1; d <= daysInCurrentMonth; d++) {
      days.push({
        day: d,
        month: viewMonth,
        year: viewYear,
        isCurrentMonth: true
      });
    }

    // 3. Leading days for next month to complete 7-col grid
    const totalCells = Math.ceil(days.length / 7) * 7;
    const remainingCells = totalCells - days.length;
    for (let d = 1; d <= remainingCells; d++) {
      const nextMonth = viewMonth === 11 ? 0 : viewMonth + 1;
      const nextYear = viewMonth === 11 ? viewYear + 1 : viewYear;
      days.push({
        day: d,
        month: nextMonth,
        year: nextYear,
        isCurrentMonth: false
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  // Handle day click (select date & navigate view month if clicking previous/next month days)
  const handleSelectDay = (dayObj) => {
    setSelectedDate({
      day: dayObj.day,
      month: dayObj.month,
      year: dayObj.year
    });

    if (dayObj.month !== viewMonth || dayObj.year !== viewYear) {
      setViewMonth(dayObj.month);
      setViewYear(dayObj.year);
    }
  };

  // Check if a day is currently selected
  const isDaySelected = (dayObj) => {
    return (
      selectedDate.day === dayObj.day &&
      selectedDate.month === dayObj.month &&
      selectedDate.year === dayObj.year
    );
  };

  // Check today date
  const today = new Date();
  const isToday = (dayObj) => {
    return (
      today.getDate() === dayObj.day &&
      today.getMonth() === dayObj.month &&
      today.getFullYear() === dayObj.year
    );
  };

  // Submit form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <div className="appointment-section">
      <div className="appointment-container">
        {/* LEFT COLUMN: HERO CONTENT & TESTIMONIAL */}
        <div className="appointment-left">
          <h1 className="appointment-title">
            LET'S BUILD <br />
            YOUR <br />
            <span className="highlight-badge-pill">NEXT CHAPTER.</span>
          </h1>

          <p className="appointment-description">
            Schedule a 30-minute discovery strategy session with our agency
            specialists. We'll audit your current channels and map out custom
            high-performance solutions.
          </p>

          <div className="section-label">
            SELECT AREAS OF INTEREST FOR YOUR AUDIT:
          </div>

          <div className="interest-tags-grid">
            {SERVICES_OPTIONS.map((service) => {
              const isSelected = selectedServices.includes(service);
              return (
                <button
                  key={service}
                  type="button"
                  className={`interest-pill ${isSelected ? "selected" : ""}`}
                  onClick={() => handleToggleService(service)}
                >
                  {service}
                </button>
              );
            })}
          </div>

          <div className="testimonial-card">
            <p className="testimonial-quote">
              "Skull Solution transformed our online presence, making it easier for us
              to attract high-value clients and showcase our work
              effectively."
            </p>
            <div className="testimonial-author">
              <img
                src={review1}
                alt="Emily Johnson"
                className="author-avatar"
              />
              <div className="author-info">
                <span className="author-name">Emily Johnson</span>
                <span className="author-role">CEO, Marketing Co.</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: BOOKING FORM & DYNAMIC CALENDAR CARD */}
        <div className="appointment-right-card">
          <h2 className="card-main-title">Choose Date & Time</h2>
          <p className="card-subtitle">
            All times displayed in your local timezone (EST).
          </p>

          {/* DYNAMIC CALENDAR */}
          <div className="calendar-box">
            <div className="calendar-header">
              <div className="calendar-month-title">
                {MONTH_NAMES[viewMonth]} {viewYear}
              </div>
              <div className="calendar-nav-buttons">
                <button
                  type="button"
                  className="nav-arrow-btn"
                  onClick={handlePrevMonth}
                  title="Previous Month"
                  aria-label="Previous Month"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="nav-arrow-btn"
                  onClick={handleNextMonth}
                  title="Next Month"
                  aria-label="Next Month"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* WEEKDAY HEADERS */}
            <div className="calendar-weekdays">
              {WEEKDAY_NAMES.map((name, idx) => (
                <span key={idx}>{name}</span>
              ))}
            </div>

            {/* DAYS GRID */}
            <div className="calendar-days-grid">
              {calendarDays.map((dayObj, idx) => {
                const selected = isDaySelected(dayObj);
                const currentMonth = dayObj.isCurrentMonth;
                const todayClass = isToday(dayObj) ? "today" : "";

                return (
                  <button
                    key={idx}
                    type="button"
                    className={`calendar-day-cell ${
                      !currentMonth ? "muted" : ""
                    } ${selected ? "selected" : ""} ${todayClass}`}
                    onClick={() => handleSelectDay(dayObj)}
                  >
                    {dayObj.day}
                  </button>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* AVAILABLE SLOTS */}
            <div className="slots-container">
              <div className="section-label">
                AVAILABLE SLOTS FOR {MONTH_SHORT[selectedDate.month]}{" "}
                {selectedDate.day}:
              </div>
              <div className="slots-grid">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={`slot-btn ${
                      selectedSlot === slot ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* EMAIL FIELD */}
            <div className="form-group-field">
              <div className="section-label">YOUR WORK EMAIL</div>
              <input
                type="email"
                required
                className="form-input-dark"
                placeholder="e.g. emily@marketingco.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* ESTIMATED MONTHLY BUDGET */}
            <div className="budget-container">
              <div className="section-label">ESTIMATED MONTHLY BUDGET</div>
              <div className="budget-grid">
                {BUDGET_OPTIONS.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    className={`budget-btn ${
                      selectedBudget === budget ? "selected" : ""
                    }`}
                    onClick={() => setSelectedBudget(budget)}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button type="submit" className="schedule-submit-btn">
              CONFIRM & SCHEDULE BRIEF
            </button>
          </form>

          {submitted && (
            <div className="booking-success-toast">
              ✓ Appointment confirmed for {MONTH_NAMES[selectedDate.month]}{" "}
              {selectedDate.day}, {selectedDate.year} at {selectedSlot}!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;