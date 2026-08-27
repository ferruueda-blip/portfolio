/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/** Height of the fixed navbar, used as scroll offset. */
const NAV_OFFSET = 80;

/** Smooth-scrolls to the element with the given id, accounting for the fixed header. */
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const offsetPosition = elementRect - bodyRect - NAV_OFFSET;

  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}

/** Smooth-scrolls back to the top of the page. */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
