# Chores4Kids Dev Card — Feature Guide & How‑To ✨🧹👧👦🧩

> **Important:** This card **requires** the [Chores4Kids integration](https://github.com/qlerup/chores4kids-sync) (custom component). Install and configure the integration first (via HACS or by copying `custom_components/chores4kids/`). The card will **not** work without it.

A powerful, family‑friendly Home Assistant card to manage kids’ chores, points, and a reward shop — all in one place. It supports an **Admin view** (for parents) and a **Kid view** (for each child), plus repeat/auto‑assignment and an optional point shop with advanced actions.

<img width="2290" height="1125" alt="image" src="https://github.com/user-attachments/assets/74f144b6-eb41-4f65-9ccf-d5fba1914383" />

<img width="2287" height="245" alt="image" src="https://github.com/user-attachments/assets/c23c1b43-0470-4d76-9641-05e34fa2a879" />


---

## What the card does (at a glance) 🧭

* **Two modes:** `admin` (parent) 🧑‍💻 and `kid` (child) 🧒.
* **Children management:** add, rename, remove, view points & pending approvals 👨‍👩‍👧‍👦.
* **Task lifecycle:** Assigned → In progress → Awaiting approval → Approved 🔄.
* **Repeat & auto‑assign:** plan which days tasks auto‑assign to a child 📅.
* **Icon picker:** choose Material Design Icons for tasks 🎨.
* **Scoreboard:** optional ranking of children by points 🏆.
* **Reward shop:** create items, upload images, set prices, and even trigger HA actions on purchase 🛍️⚙️.
* **Multi‑language i18n:** English, Danish, and several others built‑in 🌍.

> **Requires the [`chores4kids`](https://github.com/qlerup/chores4kids-sync) integration:** the card reads sensors and calls services in the `chores4kids` domain. The points and task data live in HA entities (no local storage hacks). Without the integration, there are no entities/services for the card to use.

---

## Entities & data it expects 🧱

* **Child sensors** (one per child), e.g. `sensor.child_*` with attributes:

  * `child_id`, `name`, `slug`, `tasks` (array), and **state** = current points.
* **Tasks sensor**: `sensor.chores4kids_tasks` → `attributes.tasks` (the full task list).
* **Shop sensor**: `sensor.chores4kids_shop` → `attributes.items`, `attributes.purchases`.

> The card automatically discovers these in `hass.states` and keeps track of their `entity_id`s.

---

## Admin mode (parents) 🧑‍💻

### 1) Children management 👶➡️👦

* **Add child**: type a name and click **Add child** ➕.
* **Rename** and **Delete** from the children table.
* **Points tools**: **Add points** ➕ and **Reset points** 🔄 when needed.

### 2) Create & edit tasks 📝

* Fields: **Title**, **Points**, optional **Description**, **Icon (mdi:...)**, and **Assign child**.
* Use **Icon picker** to search/choose icons quickly 🔎🎯.
* **Save** to add, or use **Edit** to update existing tasks.

### 3) Task overview & approvals ✅

* **Recent tasks** list shows what’s happening now (with a **Show all (… pending)** button).
* For each task you can **Advance** status, or **Approve** when a child marks it done.
* Quick sections:

  * **Unassigned tasks** → bulk **Assign**.
  * **Tasks per child** → see live status per kid.

### 4) Repeat & Auto‑assign 🔁📅

* Pick days (**Mon–Sun**) to mark a task as repeating.
* Choose **Auto‑assign (repeat)** and select the default child for those days.
* Hit **Save plan**. The card sends `chores4kids.set_task_repeat` behind the scenes.

> If **Auto‑assign** is active, manual assign is disabled for that task (you’ll see a helpful hint).

### 5) Scoreboard 🏁

* Toggle **Scoreboard** (via card config) to show a ranked list of kids by current points.

### 6) Reward Shop (admin) 🛒🎁

* **Open the Shop Admin** and create items with **Title**, **Price**, optional **Image** (upload), and **Icon**.
* Toggle **Active** to control visibility for kids.
* **History** shows past purchases with date/time.

#### Advanced shop actions ⚙️⏱️

Design rewards that *do something* in your smart home after purchase:

* Add **Steps** like:

  * **Action** → `entity_service` (pick entity, op = `turn_on` / `turn_off`).
  * **Delay** → seconds/minutes/hours.
* The card saves actions with `chores4kids.update_shop_item`. On purchase it runs them in order (e.g., turn on a switch, wait 30m, turn it off).

**Example**: *“Xbox time 30 min”* 🎮

1. Action: `entity_service` → `switch.xbox`, op: `turn_on`.
2. Delay: **1800 seconds**.
3. Action: `entity_service` → `switch.xbox`, op: `turn_off`.

---

## Kid mode (children) 🧒

* Shows a kid‑friendly card titled **Chores4Kids – {name}**.
* Kids can **Start** a task ▶️, then **Complete task** when done ✅.
* When a task is **Awaiting approval**, it shows a badge and disables re‑submit to prevent spam ⏳.
* **Open Shop** lets them browse **Active** rewards, see prices, and **Buy** (only if they have enough points) 🛍️.

---

## Services the card calls (under the hood) 🛠️

* Child admin: `add_child`, `rename_child`, `remove_child`, `add_points`, `reset_points`.
* Tasks: `add_task`, `delete_task`, `set_task_icon`, `assign_task`, `set_task_status`, `approve_task`, `set_task_repeat`.
* Shop: `add_shop_item`, `update_shop_item`, `delete_shop_item`, `upload_shop_image`, `buy_shop_item`.

> You’ll see smooth UI updates as the card reads from `hass.states` after service calls.

---

## Card configuration (examples) ⚙️

**Admin view** (show scoreboard):

```yaml
type: custom:chores4kids-dev-card
mode: admin
show_scoreboard: true
```

**Kid view** (for a specific child):

```yaml
type: custom:chores4kids-dev-card
mode: kid
child: "Emma"
```

> If the child list is empty in the editor, you can type the name manually (the card will still find the child sensor by its slug/name once available).

---

## Task lifecycle in practice 🔄

1. **Assigned** 📌 → The task is visible and linked to a child.
2. **In progress** 🔧 → Kid tapped **Start**.
3. **Awaiting approval** 📨 → Kid tapped **Complete task**.
4. **Approved** 🥳 → Parent approves, points are awarded. (If *Auto recycle approved tasks* is on, it’ll get ready for next round.)

**Other states** you may see include **Unassigned** and **Rejected** (if a parent denies completion).

---

## Internationalization 🌐

* Built‑in translations include **English** and **Danish**, plus additional languages present for key UI strings (e.g., Swedish, Norwegian, German, Spanish, Finnish, Italian). The card auto‑localizes based on `hass` language.

---

## Tips & good practices 💡

* Keep **points** modest and consistent so kids stay motivated 🎯.
* Use **icons** to make tasks instantly recognizable 🖼️.
* Pair **repeat + auto‑assign** for daily/weekly routines 🗓️.
* Start simple in the **Shop**, then add **Advanced actions** as you go 🧪.

---

## Troubleshooting 🧰

* **Child not found?** Make sure the child sensor exists (with `child_id`, `name`, `slug`) and matches the card’s `child` config.
* **No tasks appearing?** Check `sensor.chores4kids_tasks` and that tasks have the expected fields (title, points, status, etc.).
* **Shop empty?** Ensure items are **Active**; kids only see active items.

---

### That’s it! 🎉

Enjoy a playful, structured way to build great habits — and make rewards feel magical ✨🏡.
