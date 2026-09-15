import { useState } from "react";
import "./ServiceBook.css";

const CHANNELS_DATA = [
  {
    id: "performance-advertising",
    name: "Performance Advertising",
    summaryName: "Platform Advertising Pipeline",
    tags: ["Meta Ads", "Google PPC", "Retargeting"],
    desc: "Maximize conversion velocity and ROAS across Paid Meta & Google networks using real-time yield curves."
  },
  {
    id: "website-designing",
    name: "Website Designing & UI/UX",
    summaryName: "High-Convert Visual UX",
    tags: ["UI/UX", "Responsive", "Conversion"],
    desc: "Engineered responsive visuals built exclusively for high-intent conversions and brand authority."
  },
  {
    id: "seo-services",
    name: "Search Engine Optimization (SEO)",
    summaryName: "SEO Code Architecture",
    tags: ["Technical", "Organic", "Audits"],
    desc: "Structural code architecture, strategic link networks, and persistent user-intent keywords."
  }
];

const AD_SPEND_OPTIONS = [
  "$2.5k - $5k",
  "$5k - $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k+"
];

const LAUNCH_WINDOW_OPTIONS = [
  { label: "Immediate (< 30 Days)", sub: "< 30 Days", val: "Immediate" },
  { label: "1 - 2 Months", sub: "30 - 60 Days", val: "1 - 2 Months" },
  { label: "3+ Months", sub: "90+ Days", val: "3+ Months" }
];

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:30 AM",
  "01:00 PM",
  "03:30 PM"
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const MONTH_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const WEEKDAY_NAMES = ["M", "T", "W", "T", "F", "S", "S"];

const ServiceBook = () => {
  const realToday = new Date();

  // BY DEFAULT NOTHING IS SELECTED!
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [selectedAdSpend, setSelectedAdSpend] = useState("");
  const [selectedLaunchWindow, setSelectedLaunchWindow] = useState(null);

  // Calendar View State (defaults to current real month & year)
  const [viewYear, setViewYear] = useState(realToday.getFullYear());
  const [viewMonth, setViewMonth] = useState(realToday.getMonth());

  // Selected Date & Time (BY DEFAULT NULL)
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Booking Confirmation Toast
  const [booked, setBooked] = useState(false);

  // Toggle Channel Selection
  const toggleChannel = (channelId) => {
    setSelectedChannels((prev) =>
      prev.includes(channelId)
        ? prev.filter((id) => id !== channelId)
        : [...prev, channelId]
    );
  };

  // Calendar Month Navigation
  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((prev) => prev - 1);
    } else {
      setViewMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((prev) => prev + 1);
    } else {
      setViewMonth((prev) => prev + 1);
    }
  };

  // Generate Calendar Days Grid
  const generateCalendarDays = () => {
    const days = [];
    const firstDay = new Date(viewYear, viewMonth, 1);
    const jsDay = firstDay.getDay(); // 0 = Sun, 1 = Mon...
    const startOffset = (jsDay + 6) % 7; // Mon = 0
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

    // Trailing days
    for (let i = startOffset - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        month: viewMonth === 0 ? 11 : viewMonth - 1,
        year: viewMonth === 0 ? viewYear - 1 : viewYear,
        isCurrentMonth: false
      });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      days.push({
        day: d,
        month: viewMonth,
        year: viewYear,
        isCurrentMonth: true
      });
    }

    // Leading days
    const totalCells = Math.ceil(days.length / 7) * 7;
    const remaining = totalCells - days.length;
    for (let d = 1; d <= remaining; d++) {
      days.push({
        day: d,
        month: viewMonth === 11 ? 0 : viewMonth + 1,
        year: viewMonth === 11 ? viewYear + 1 : viewYear,
        isCurrentMonth: false
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  // Select Date Cell
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

  const isDaySelected = (dayObj) => {
    if (!selectedDate) return false;
    return (
      selectedDate.day === dayObj.day &&
      selectedDate.month === dayObj.month &&
      selectedDate.year === dayObj.year
    );
  };

  const isToday = (dayObj) => {
    return (
      realToday.getDate() === dayObj.day &&
      realToday.getMonth() === dayObj.month &&
      realToday.getFullYear() === dayObj.year
    );
  };

  // Submit Strategy Booking
  const handleConfirmBooking = () => {
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
    }, 6000);
  };

  // Format Selected Date & Time string for meeting details box
  const getMeetingDisplayStr = () => {
    if (!selectedDate && !selectedTime) {
      return "Select date & time";
    }
    const dayNameStr = selectedDate
      ? new Date(selectedDate.year, selectedDate.month, selectedDate.day).toLocaleDateString("en-US", { weekday: "short" })
      : "";
    const monthStr = selectedDate ? MONTH_SHORT[selectedDate.month] : "";
    const dayNum = selectedDate ? selectedDate.day : "";
    const timeStr = selectedTime ? ` at ${selectedTime} EST` : "";

    return `${dayNameStr}, ${monthStr} ${dayNum}${timeStr}`;
  };

  return (
    <div className="sb-page-section">
      <div className="sb-main-grid">
        {/* LEFT COLUMN: CONFIGURATOR FORM */}
        <div className="sb-left-col">
          <div className="sb-badge-tag">PIPELINE CONFIGURATOR</div>
          <h1 className="sb-main-title">
            Configure your bespoke growth engine.
          </h1>
          <p className="sb-main-desc">
            Select your capabilities and desired outcomes. Our partner-level
            consultants will design and present your tailored mathematical
            model during your strategy session.
          </p>

          {/* STEP 1: DESIRED CHANNELS */}
          <div className="sb-section-step-header">
            <span className="sb-step-badge">1</span>
            <h2 className="sb-step-title">Select Desired Channels</h2>
          </div>

          <div className="sb-channels-list">
            {CHANNELS_DATA.map((ch) => {
              const isSelected = selectedChannels.includes(ch.id);
              return (
                <div
                  key={ch.id}
                  className={`sb-channel-card ${isSelected ? "selected" : ""}`}
                  onClick={() => toggleChannel(ch.id)}
                >
                  <div className="sb-channel-top-row">
                    <div className="sb-channel-title-box">
                      <div className="sb-radio-indicator"></div>
                      <span className="sb-channel-name">{ch.name}</span>
                    </div>
                    <div className="sb-channel-tags">
                      {ch.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="sb-tag-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="sb-channel-subtext">{ch.desc}</p>
                </div>
              );
            })}
          </div>

          {/* STEP 2: METRICS & OBJECTIVES */}
          <div className="sb-section-step-header">
            <span className="sb-step-badge">2</span>
            <h2 className="sb-step-title">Current Metrics & Objectives</h2>
          </div>

          <div className="sb-metrics-grid">
            {/* Box 1: Monthly Ad Spend Goal */}
            <div className={`sb-metric-box ${selectedAdSpend ? "active" : ""}`}>
              <div>
                <div className="sb-metric-header">
                  <span className="sb-metric-label">MONTHLY AD SPEND GOAL</span>
                  <span className="sb-metric-subtag">Target range</span>
                </div>
                <div className={`sb-metric-value ${!selectedAdSpend ? "placeholder" : ""}`}>
                  {selectedAdSpend || "Select spend range..."}
                </div>
              </div>

              <div className="sb-metric-options">
                {AD_SPEND_OPTIONS.map((spend) => (
                  <button
                    key={spend}
                    type="button"
                    className={`sb-option-pill ${selectedAdSpend === spend ? "selected" : ""}`}
                    onClick={() => setSelectedAdSpend(spend === selectedAdSpend ? "" : spend)}
                  >
                    {spend}
                  </button>
                ))}
              </div>
            </div>

            {/* Box 2: Desired Launch Window */}
            <div className={`sb-metric-box ${selectedLaunchWindow ? "active" : ""}`}>
              <div>
                <div className="sb-metric-header">
                  <span className="sb-metric-label">DESIRED LAUNCH WINDOW</span>
                  <span className="sb-metric-subtag accent">
                    {selectedLaunchWindow ? selectedLaunchWindow.sub : "Timeline"}
                  </span>
                </div>
                <div className={`sb-metric-value ${!selectedLaunchWindow ? "placeholder" : ""}`}>
                  {selectedLaunchWindow ? selectedLaunchWindow.val : "Select launch timeline..."}
                </div>
              </div>

              <div className="sb-metric-options">
                {LAUNCH_WINDOW_OPTIONS.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`sb-option-pill ${selectedLaunchWindow?.val === opt.val ? "selected" : ""}`}
                    onClick={() => setSelectedLaunchWindow(selectedLaunchWindow?.val === opt.val ? null : opt)}
                  >
                    {opt.val}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* STEP 3: STRATEGY SESSION TIME */}
          <div className="sb-section-step-header">
            <span className="sb-step-badge">3</span>
            <h2 className="sb-step-title">Select Strategy Session Time</h2>
          </div>

          <div className="sb-calendar-card">
            {/* Left Calendar */}
            <div className="sb-cal-main">
              <div className="sb-cal-header">
                <span className="sb-cal-month-title">
                  {MONTH_NAMES[viewMonth]} {viewYear}
                </span>
                <div className="sb-cal-nav">
                  <button
                    type="button"
                    className="sb-nav-btn"
                    onClick={handlePrevMonth}
                    title="Previous Month"
                    aria-label="Previous Month"
                  >
                    <svg
                      width="12"
                      height="12"
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
                    className="sb-nav-btn"
                    onClick={handleNextMonth}
                    title="Next Month"
                    aria-label="Next Month"
                  >
                    <svg
                      width="12"
                      height="12"
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

              <div className="sb-cal-weekdays">
                {WEEKDAY_NAMES.map((w, idx) => (
                  <span key={idx}>{w}</span>
                ))}
              </div>

              <div className="sb-cal-days-grid">
                {calendarDays.map((dayObj, idx) => {
                  const selected = isDaySelected(dayObj);
                  const todayClass = isToday(dayObj) ? "today" : "";
                  return (
                    <button
                      key={idx}
                      type="button"
                      className={`sb-day-cell ${!dayObj.isCurrentMonth ? "muted" : ""} ${selected ? "selected" : ""} ${todayClass}`}
                      onClick={() => handleSelectDay(dayObj)}
                    >
                      {dayObj.day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Available Times */}
            <div className="sb-times-column">
              <div className="sb-times-label">AVAILABLE TIMES (EST)</div>
              <div className="sb-times-list">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`sb-time-slot-btn ${selectedTime === time ? "selected" : ""}`}
                    onClick={() => setSelectedTime(time === selectedTime ? null : time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PROPOSED STRATEGY SCOPE SUMMARY CARD */}
        <div className="sb-summary-card">
          <div className="sb-badge-tag">PROPOSED STRATEGY SCOPE</div>
          <h2 className="sb-summary-title">Growth Architecture Setup</h2>

          <div className="sb-scope-items-list">
            {CHANNELS_DATA.map((ch) => {
              const isSelected = selectedChannels.includes(ch.id);
              return (
                <div key={ch.id} className="sb-scope-item">
                  <div>
                    <div className="sb-scope-item-name">{ch.summaryName}</div>
                    <div className="sb-scope-item-sub">
                      {isSelected
                        ? "Interactive layout templates mapped to your launch window."
                        : "Click left card to include in pipeline strategy."}
                    </div>
                  </div>
                  <span className={`sb-scope-item-status ${isSelected ? "active" : ""}`}>
                    {isSelected ? "Selected" : "Optional"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* MEETING DETAILS INSET BOX */}
          <div className="sb-meeting-box">
            <div className="sb-meeting-label">MEETING DETAILS</div>
            <div className="sb-meeting-datetime">
              {getMeetingDisplayStr()}
            </div>
            <div className="sb-meeting-subtext">45-Min Video Strategy Review</div>
          </div>

          {/* ACTION BUTTON */}
          <button
            type="button"
            className="sb-confirm-btn"
            onClick={handleConfirmBooking}
          >
            <span>Confirm Strategy Booking</span>
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
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>

          <p className="sb-guarantee-text">
            No credit card required. Sessions are reserved exclusively for
            founders, heads of growth, and enterprise directors looking to
            scale symmetrically.
          </p>

          {booked && (
            <div className="sb-booking-toast">
              ✓ Strategy booking confirmed! A calendar invite has been dispatched.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceBook;
