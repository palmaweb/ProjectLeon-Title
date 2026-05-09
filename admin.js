<!-- admin.html -->
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Broadcast Control Panel</title>

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

<link rel="stylesheet" href="admin.css">

</head>
<body>

<div class="app">

    <!-- SIDEBAR -->

    <aside class="sidebar">

        <div class="logoArea">
            <div class="logoCircle"></div>
            <h2>Broadcast Studio</h2>
        </div>

        <nav>

            <button class="navItem active" data-tab="dashboard">
                <i class="fa-solid fa-chart-line"></i>
                Dashboard
            </button>

            <button class="navItem" data-tab="overlay">
                <i class="fa-solid fa-layer-group"></i>
                Overlay
            </button>

            <button class="navItem" data-tab="logoClock">
                <i class="fa-solid fa-clock"></i>
                Logo & Clock
            </button>

            <button class="navItem" data-tab="typography">
                <i class="fa-solid fa-font"></i>
                Typography
            </button>

            <button class="navItem" data-tab="colors">
                <i class="fa-solid fa-palette"></i>
                Colors
            </button>

            <button class="navItem" data-tab="animations">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                Animations
            </button>

            <button class="navItem" data-tab="presets">
                <i class="fa-solid fa-floppy-disk"></i>
                Presets
            </button>

        </nav>

    </aside>


    <!-- MAIN -->

    <main class="mainContent">

        <!-- TOPBAR -->

        <div class="topbar">

            <div class="title">
                Professional Broadcast Controller
            </div>

            <div class="actions">

                <button class="topBtn">
                    Export
                </button>

                <button class="topBtn primary">
                    Save
                </button>

            </div>

        </div>


        <!-- CONTENT -->

        <div class="contentArea">

            <!-- LEFT SETTINGS -->

            <div class="settingsPanel">

                <!-- DASHBOARD -->

                <section class="tab active" id="dashboard">

                    <div class="card">

                        <h3>Welcome</h3>

                        <p>
                            Professional overlay control system
                        </p>

                    </div>

                </section>


                <!-- OVERLAY -->

                <section class="tab" id="overlay">

                    <div class="card">

                        <h3>Overlay Size</h3>

                        <div class="formGrid">

                            <div>
                                <label>Width</label>
                                <input type="number" id="width" value="1200">
                            </div>

                            <div>
                                <label>Height</label>
                                <input type="number" id="height" value="200">
                            </div>

                            <div>
                                <label>Border Radius</label>
                                <input type="number" id="radius" value="20">
                            </div>

                            <div>
                                <label>Opacity</label>
                                <input type="range" id="opacity"
                                min="0"
                                max="1"
                                step="0.1"
                                value="1">
                            </div>

                        </div>

                    </div>

                </section>


                <!-- LOGO -->

                <section class="tab" id="logoClock">

                    <div class="card">

                        <h3>Logo</h3>

                        <label>Logo URL</label>

                        <input type="text"
                        id="logoURL"
                        placeholder="https://">

                        <label>Logo Background</label>

                        <input type="color"
                        id="logoBg"
                        value="#111111">

                    </div>


                    <div class="card">

                        <h3>Clock</h3>

                        <label>Clock Background</label>

                        <input type="color"
                        id="clockBg"
                        value="#000000">

                        <label>Clock Text Color</label>

                        <input type="color"
                        id="clockColor"
                        value="#ffffff">

                        <label>Switch Time (sec)</label>

                        <input type="number"
                        id="clockDelay"
                        value="10">

                    </div>

                </section>


                <!-- TYPOGRAPHY -->

                <section class="tab" id="typography">

                    <div class="card">

                        <h3>Title</h3>

                        <label>Title Text</label>

                        <input type="text"
                        id="titleTextInput"
                        value="BREAKING NEWS">

                        <label>Font Size</label>

                        <input type="number"
                        id="titleSize"
                        value="56">

                        <label>Color</label>

                        <input type="color"
                        id="titleColor"
                        value="#ffffff">

                    </div>


                    <div class="card">

                        <h3>Subtitle</h3>

                        <label>Subtitle Text</label>

                        <textarea
                        id="subtitleInput">Live subtitle text here</textarea>

                        <label>Font Size</label>

                        <input type="number"
                        id="subtitleSize"
                        value="28">

                        <label>Color</label>

                        <input type="color"
                        id="subtitleColor"
                        value="#dddddd">

                    </div>

                </section>


                <!-- COLORS -->

                <section class="tab" id="colors">

                    <div class="card">

                        <h3>Theme</h3>

                        <label>Main Background</label>

                        <input type="color"
                        id="mainBg"
                        value="#1e1e1e">

                    </div>

                </section>


                <!-- ANIMATIONS -->

                <section class="tab" id="animations">

                    <div class="card">

                        <h3>Transitions</h3>

                        <label>Animation Type</label>

                        <select id="animationType">

                            <option value="fade">
                                Fade
                            </option>

                            <option value="slide">
                                Slide
                            </option>

                            <option value="zoom">
                                Zoom
                            </option>

                            <option value="glitch">
                                Glitch
                            </option>

                        </select>

                    </div>

                </section>


                <!-- PRESETS -->

                <section class="tab" id="presets">

                    <div class="card">

                        <h3>Presets</h3>

                        <button class="presetBtn">
                            Save Preset
                        </button>

                        <button class="presetBtn">
                            Load Preset
                        </button>

                    </div>

                </section>

            </div>


            <!-- LIVE PREVIEW -->

            <div class="previewPanel">

                <div class="previewHeader">
                    LIVE PREVIEW
                </div>

                <div class="previewArea">

                    <div id="previewOverlay">

                        <div id="previewLeft">

                            <img id="previewLogo"
                            src="">

                            <div id="previewClock">

                                <span id="previewCountry">
                                    IRAN
                                </span>

                                <span id="previewTime">
                                    12:30
                                </span>

                            </div>

                        </div>


                        <div id="previewRight">

                            <h1 id="previewTitle">
                                BREAKING NEWS
                            </h1>

                            <p id="previewSubtitle">
                                Live subtitle text here
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </main>

</div>

<script src="admin.js"></script>

</body>
</html>
