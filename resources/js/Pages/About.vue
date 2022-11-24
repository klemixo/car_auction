<template>
  <div class="about">
    <h2>
      About Page
      <div>
  <label class="typo__label">Single select</label>
  <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pick a value"></multiselect>
  <pre class="language-json"><code>{{ value  }}</code></pre>
</div>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      value: '',
      options: ['Select option', 'options', 'selected', 'multiple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched']
    }
  }
}
</script>
