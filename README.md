# Stillwater

[English](README.md) · [简体中文](README.zh-CN.md) · [Play online](https://pyin769-source.github.io/stillwater-game/)

A small, dependency-free browser prototype about a fish surviving dangerous water.

## Play

Open `index.html` in a modern browser. Choose a difficulty before starting: **Very Easy**, **Easy**, **Normal**, **Hard**, or **Very Hard**. Use the **arrow keys** (or **WASD**) to swim, **Shift** to burst, and **E** to pause. Bites happen automatically on contact with any signal; each bite has an equal chance of being food or bait, regardless of the signal's appearance. Food restores 25 hunger; bait restores 10 before starting the hook escape challenge. From the pause screen, resume or return to the main menu; returning abandons the current run without awarding gene points. Your sonar automatically brightens nearby ripples periodically. Hunger falls over time and faster while sprinting, so keep feeding.

Open **All upgrades** from the title screen to browse the four growth-milestone upgrades and spend permanent gene points in the gene tree. Use the language selector to switch between English (default), Simplified Chinese, and Spanish; the choice is saved in the browser. Return to the title screen to begin a journey.

During a run, the **Your Upgrades** panel lists inherited gene traits and adaptations you have chosen so far, including their numeric bonuses.

If hooked, follow the displayed **arrow-key** sequence to break free. The arrow shows the line's pull direction, mistakes raise strain, and waiting passively lets the fisher reel you in. Five widened side-by-side regions form a larger map with layered scenery: underwater volcanoes in the hottest water, marsh reeds and roots, pond vegetation, cold-water canyons and logs, and ice shelves. Each habitat has one distinct surface landscape: a geothermal rock shore, a marsh shore with a lighthouse, a wooded pond shore, or broad icy plains where penguins walk. Seafloor plants and shells remain distinct by region. Steer around visible solid hazards such as tangled roots, snags, volcanic rocks, and ice. The central pond sits between warmer and colder habitats. Background flow waves show current direction, and currents push back toward the pond more strongly farther out. Water and sky colors blend gradually between regions. The depth is bounded by a visible riverbed at 3,200 m. Swimming at the surface kicks up splashes. Meals advance fish growth; each milestone pauses the run for a short, plain-language adaptation choice, tracked by the growth bar. A run ends if hunger empties or a fisher reels you in; distance earns gene points for modest permanent starting adaptations.

## First-slice mechanics

- Signals look alike and are not classified by vibration. Touching one triggers an automatic bite with a 50/50 food-or-bait outcome; no signal is guaranteed safe.
- Signals are abundant in the introductory shallows. Deeper down, signal availability varies with depth and habitat, and faster spawns raise the cap from six to ten active signals (up to five nearby) near the riverbed.
- Difficulty adjusts hunger drain and hook escape pressure; Normal is the balanced default. Escape sequences also grow longer and harder with run time and fish growth.
- The **Scent Trail** upgrade (and its gene) lets you press **F** to point toward the nearest food or bait (spawning one if none is near), with a cooldown. Signals look different in each habitat, and the sky and water darken and brighten on a day/night cycle based on your run time.
- **Fast Growth** gives +1 extra growth bar per meal.
- The first 250 m provide an introductory area for learning movement and passive sonar for up to 18 seconds, but bites can still result in a hook.
- Hunger, stamina, current, and visibility vary across the five habitats. Fish face in eight directions, and each region has its own non-blocking landscape.
- Gene upgrades are saved in browser local storage.

This prototype has no build step or external runtime dependencies.
