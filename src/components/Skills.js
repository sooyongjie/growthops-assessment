import React from 'react'
import Heading from './Heading'
import IconOnTop from './IconOnTop'

function Skills() {
    return (
        <div className="skills-container container">
            <IconOnTop icon="fas fa-toolbox"/>
            <Heading theme="dark" text="OUR POWERFUL " highlight="SKILLS" subtitle="We're good and experienced at different things and areas and we promise about quality of our work" />
            <div className="skills">
                <div class="skill progress-45 style-2">
                    <span class="label">45<span class="smaller">%</span></span>
                    <div class="pie">
                        <div class="left-side half-circle"></div>
                        <div class="right-side half-circle"></div>
                    </div>
                    <div class="shadow"></div>
                    <div className="skill-name">WEB DESIGN</div>
                </div>
                <div class="skill progress-92 style-2">
                    <span class="label">92<span class="smaller">%</span></span>
                    <div class="pie">
                        <div class="left-side half-circle"></div>
                        <div class="right-side half-circle"></div>
                    </div>
                    <div class="shadow"></div>
                    <div className="skill-name">WEB DESIGN</div>
                </div>
                <div class="skill progress-69 style-2">
                    <span class="label">69<span class="smaller">%</span></span>
                    <div class="pie">
                        <div class="left-side half-circle"></div>
                        <div class="right-side half-circle"></div>
                    </div>
                    <div class="shadow"></div>
                    <div className="skill-name">WEB DESIGN</div>
                </div>
                <div class="skill progress-100 style-2">
                    <span class="label">100<span class="smaller">%</span></span>
                    <div class="pie">
                        <div class="left-side half-circle"></div>
                        <div class="right-side half-circle"></div>
                    </div>
                    <div class="shadow"></div>
                    <div className="skill-name">WEB DESIGN</div>
                </div>
                <div class="skill progress-83 style-2">
                    <span class="label">83<span class="smaller">%</span></span>
                    <div class="pie">
                        <div class="left-side half-circle"></div>
                        <div class="right-side half-circle"></div>
                    </div>
                    <div class="shadow"></div>
                    <div className="skill-name">WEB DESIGN</div>
                </div>
                <div class="skill progress-50 style-2">
                    <span class="label">50<span class="smaller">%</span></span>
                    <div class="pie">
                        <div class="left-side half-circle"></div>
                        <div class="right-side half-circle"></div>
                    </div>
                    <div class="shadow"></div>
                    <div className="skill-name">WEB DESIGN</div>
                </div>
            </div>
        </div>
    )
}

export default Skills
